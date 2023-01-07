import { UrlContainerBuilder } from './UrlContainerBuilder';
import { UrlContainerResponse } from './UrlContainerResponse';

export function parseContainerResponse(containerRes: UrlContainerResponse) {
  const { containerID, name } = containerRes;
  return UrlContainerBuilder(containerID, name);
}
