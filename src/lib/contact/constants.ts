export const BUSINESS_EMAIL = "Dialedinelectric@gmail.com";
export const BUSINESS_PHONE_DISPLAY = "541 817 6480";
export const BUSINESS_PHONE_TEL = "15418176480";

export const CONTACT_SERVICES = [
  "Generac generator installation",
  "Manual transfer switch / backup power",
  "Panel or service upgrade",
  "New home / construction wiring",
  "Commercial electrical",
  "EV charger installation",
  "Other electrical work",
] as const;

export type ContactService = (typeof CONTACT_SERVICES)[number];

export const FIELD_LIMITS = {
  name: 120,
  phone: 40,
  email: 254,
  message: 5000,
  service: 80,
  website: 200,
} as const;

export const MAX_CONTACT_JSON_BYTES = 16_384;

export const RATE_LIMIT = {
  limit: 6,
  windowMs: 10 * 60 * 1000,
} as const;

export function getLeadInboxEmail(): string {
  return process.env.LEAD_INBOX_EMAIL?.trim() || BUSINESS_EMAIL;
}