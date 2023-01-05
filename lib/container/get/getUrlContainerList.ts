import Cookies from 'js-cookie';
import { axiosInstance } from '../../apiInteractor/apiInstance';
import { UrlContainer } from '../UrlContainer';
import { UrlContainerBuilder } from '../UrlContainerBuilder';

export const getUrlContainerList = async (): Promise<UrlContainer[]> => {
  const uid = Cookies.get('uid');

  try {
    const response = await axiosInstance.get(`/containers?uid=${uid}`, {
      headers: {
        Authorization: Cookies.get('Authorization'),
      },
    });

    const containerList = response.data.map(
      (containerRes: { containerID: number; name: string }) =>
        UrlContainerBuilder(containerRes.containerID, containerRes.name)
    );

    return containerList;
  } catch (error: any) {
    console.error(error);
    return [];
  }
};
