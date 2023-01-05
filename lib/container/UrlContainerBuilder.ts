import { UrlContainer } from './UrlContainer';

export const UrlContainerBuilder = (
  containerId: number,
  title: string
): UrlContainer => {
  return {
    id: containerId,
    title: title,
  };
};
