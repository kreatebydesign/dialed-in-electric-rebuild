/** GA4 lead success should fire only once per accepted server delivery. */
export function shouldFireQuoteSubmitSuccess(options: {
  delivered: boolean;
  messageId?: string;
  alreadyTracked: boolean;
}): boolean {
  if (options.alreadyTracked) return false;
  return options.delivered && Boolean(options.messageId);
}