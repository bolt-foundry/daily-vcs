import { getLogger } from "deps.ts";
const logger = getLogger(import.meta);
export class BfError extends Error {
  constructor(
    messageOrError: string | Error =
      "An error occurred. We just logged it and will try to figure out what's going on.",
  ) {
    const message = messageOrError instanceof Error
      ? messageOrError.message
      : messageOrError;
    super(message);
    logger.error(message, this);
  }
}
