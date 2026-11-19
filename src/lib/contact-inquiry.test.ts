import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";
import { parseContactInquiry, submitContactInquiry } from "./contact-inquiry";
import { shouldFireQuoteSubmitSuccess } from "./analytics-events";
import { checkRateLimit, resetRateLimitBucketsForTests } from "./rate-limit";

const valid = {
  name: "Jordan Lee",
  phone: "541-817-9999",
  email: "jordan@example.com",
  service: "Generac generator installation",
  message: "Need a standby generator in Roseburg.",
  website: "",
};

describe("parseContactInquiry", () => {
  it("accepts valid payload", () => {
    const parsed = parseContactInquiry(valid);
    assert.equal(parsed.ok, true);
    if (parsed.ok) {
      assert.equal(parsed.honeypot, false);
      assert.equal(parsed.data.name, valid.name);
    }
  });

  it("rejects missing required fields", () => {
    const parsed = parseContactInquiry({ name: "Only name" });
    assert.equal(parsed.ok, false);
  });

  it("rejects invalid email when provided", () => {
    const parsed = parseContactInquiry({ ...valid, email: "not-an-email" });
    assert.equal(parsed.ok, false);
  });

  it("flags honeypot when website is filled", () => {
    const parsed = parseContactInquiry({ ...valid, website: "https://spam.test" });
    assert.equal(parsed.ok, true);
    if (parsed.ok) assert.equal(parsed.honeypot, true);
  });
});

describe("submitContactInquiry", () => {
  it("delivers when Resend succeeds", async () => {
    const result = await submitContactInquiry(valid, {
      resendApiKey: "re_test",
      fromEmail: "Dialed In Electric <leads@dialedinelectricroseburg.com>",
      toEmail: "Dialedinelectric@gmail.com",
      sendEmail: async (args) => {
        assert.match(args.subject, /Jordan Lee/);
        assert.match(args.text, /Roseburg/);
        assert.equal(args.replyTo, valid.email);
        return { id: "msg_test_1", error: null };
      },
    });
    assert.equal(result.ok, true);
    if (result.ok && "delivered" in result && result.delivered) {
      assert.equal(result.messageId, "msg_test_1");
    }
  });

  it("fails closed without Resend configuration", async () => {
    const result = await submitContactInquiry(valid, {
      resendApiKey: "",
      fromEmail: "",
    });
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.code, "EMAIL_NOT_CONFIGURED");
  });

  it("fails when provider errors", async () => {
    const result = await submitContactInquiry(valid, {
      resendApiKey: "re_test",
      fromEmail: "Dialed In Electric <leads@dialedinelectricroseburg.com>",
      sendEmail: async () => ({
        error: { name: "resend_error", message: "down" },
      }),
    });
    assert.equal(result.ok, false);
    if (!result.ok) assert.equal(result.code, "EMAIL_PROVIDER_ERROR");
  });

  it("honeypot succeeds without sending", async () => {
    let sent = false;
    const result = await submitContactInquiry(
      { ...valid, website: "filled" },
      {
        sendEmail: async () => {
          sent = true;
          return { id: "x", error: null };
        },
      }
    );
    assert.equal(sent, false);
    assert.equal(result.ok, true);
    if (result.ok) assert.equal(result.honeypot, true);
  });
});

describe("rate limit", () => {
  beforeEach(() => resetRateLimitBucketsForTests());

  it("blocks after limit", () => {
    const key = "contact:test-ip";
    for (let i = 0; i < 6; i++) {
      const r = checkRateLimit({ key, limit: 6, windowMs: 60_000, now: 1_000 });
      assert.equal(r.ok, true);
    }
    const blocked = checkRateLimit({ key, limit: 6, windowMs: 60_000, now: 1_000 });
    assert.equal(blocked.ok, false);
  });
});

describe("quote_form_submit_success gate", () => {
  it("fires only for delivered requests with message id", () => {
    assert.equal(
      shouldFireQuoteSubmitSuccess({
        delivered: true,
        messageId: "msg_1",
        alreadyTracked: false,
      }),
      true
    );
    assert.equal(
      shouldFireQuoteSubmitSuccess({
        delivered: true,
        messageId: undefined,
        alreadyTracked: false,
      }),
      false
    );
    assert.equal(
      shouldFireQuoteSubmitSuccess({
        delivered: false,
        messageId: "msg_1",
        alreadyTracked: false,
      }),
      false
    );
  });
});