import { apiUrl } from '../../apiconfigs/apiUrl';
import { parseContainerResponse } from '../parseContainerResponse';
import { UrlContainer } from '../UrlContainer';
import { UrlContainerResponse } from '../UrlContainerResponse';

export const getContainerList = async (
  uid: string,
  token: string
): Promise<UrlContainer[]> => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', token);

  const res = await fetch(apiUrl(`/containers?uid=${uid}`), {
    method: 'get',
    headers: headers,
  });

  if (res.ok) {
    const containerList = (await res.json()) as UrlContainerResponse[];

    console.log(containerList);
    return containerList.map(parseContainerResponse);
  } else {
    console.error(res);
    return [];
  }
};
