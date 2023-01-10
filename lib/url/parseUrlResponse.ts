import { UrlBuilder } from "./UrlBuilder";
import { UrlResponse } from "./UrlResponse";

export default function parseContainerResponse(urlRes: UrlResponse) {
  const { urlID, innerUrl } = urlRes;
  return UrlBuilder(urlID, innerUrl);
}
