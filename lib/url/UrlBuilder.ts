import { Url } from "./Url";

export const UrlBuilder = (
  urlId: number,
  link: string
): Url => {
  return {
    id: urlId,
    link: link,
  };
};
