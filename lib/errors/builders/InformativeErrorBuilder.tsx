import { InformativeError } from '../InformativeError';

export const informativeErrorBuilder = (
  whatError: string,
  usefulMessage: string
): InformativeError => {
  const err: InformativeError = {
    whatError: whatError,
    usefulMessage: usefulMessage,
  };

  return err;
};
