import { apiUrl } from '../../apiconfigs/apiUrl';
import { getAuthToken } from '../../localstorage/getAuthToken';
import { getUid } from '../../localstorage/getUid';
import { parseContainerResponse } from '../parseContainerResponse';
import { UrlContainer } from '../UrlContainer';
import { UrlContainerResponse } from '../UrlContainerResponse';

export const getContainerList = async (): Promise<UrlContainer[]> => {
  // CHECK FOR CREDENTIALS
  const uid = getUid();
  const authToken = getAuthToken();

  if (uid === null || authToken === null) {
    alert('Please login');
    return Promise.reject();
  }

  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', authToken);

  const res = await fetch(apiUrl(`/containers?uid=${uid}`), {
    method: 'get',
    headers: headers,
  });

  const containerList = (await res.json()) as UrlContainerResponse[];

  console.log(containerList);

  return containerList.map(parseContainerResponse);
};
