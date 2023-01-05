import { axiosInstance } from '../../apiInteractor/apiInstance';
import { informativeErrorBuilder } from '../../errors/builders/InformativeErrorBuilder';
import { InformativeError } from '../../errors/InformativeError';
import { UrlContainer } from '../UrlContainer';
import { getUrlContainerConfig } from './getContainerConfig';

export const getUrlContainer = async (
  containerId: number
): Promise<UrlContainer | InformativeError> => {
  try {
    const response = await axiosInstance.post(
      '/containers/{containerId}',
      getUrlContainerConfig
    );

    const urlContainer: UrlContainer = response.data as UrlContainer;

    return urlContainer;
  } catch (error: any) {
    return informativeErrorBuilder('Failed to get container', error.message);
  }
};
