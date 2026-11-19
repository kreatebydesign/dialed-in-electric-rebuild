type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

export type RateLimitResult =
  | { ok: true }
  | { ok: false; code: "RATE_LIMITED"; retryAfterSeconds: number };

export function checkRateLimit(options: {
  key: string;
  limit?: number;
  windowMs?: number;
  now?: number;
}): RateLimitResult {
  const limit = options.limit ?? 8;
  const windowMs = options.windowMs ?? 10 * 60 * 1000;
  const now = options.now ?? Date.now();
  const key = options.key.trim();
  if (!key) return { ok: true };

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (existing.count >= limit) {
    const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    return { ok: false, code: "RATE_LIMITED", retryAfterSeconds };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return { ok: true };
}

export function resetRateLimitBucketsForTests(): void {
  buckets.clear();
}

export function clientIpFromRequest(request: Request): string {
  const cf = request.headers.get("cf-connecting-ip")?.trim();
  if (cf) return cf;
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (forwarded) return forwarded;
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "unknown";
}