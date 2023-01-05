import Cookies from 'js-cookie';
import { axiosInstance } from '../../apiInteractor/apiInstance';
import { UrlContainer } from '../UrlContainer';
import { getUrlContainerConfig } from './getContainerConfig';

export const getUrlContainerList = async (): Promise<
  UrlContainer[] 
> => {
  try {
    const response = await axiosInstance.get('/containers', {
      headers: {
        Authorization: Cookies.get('Authorization'),
      },
      params: {
        uid: Cookies.get('uid'),
      },
    });

    const urlContainer: UrlContainer[] = response.data as UrlContainer[];

    return [...urlContainer];
  } catch (error: any) {
     console.error(error)
     return []
  }
};
