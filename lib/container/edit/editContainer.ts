import { apiUrl } from '../../apiconfigs/apiUrl';
import { storeInteractor } from '../../localStorage/storeInteractor';
import { UrlContainerRequest } from '../UrlContainerRequest';

export const editContainerHandler = async (
  containerId: number,
  newTitle: string
): Promise<boolean> => {
  const containerRequest: UrlContainerRequest = {
    uid: storeInteractor.getUser().uid,
    name: newTitle,
  };

  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', storeInteractor.getToken());

  const config: RequestInit = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(containerRequest),
  };

  const res = await fetch(apiUrl(`/containers/${containerId}`), config);

  if (res.ok) {
    return true;
  } else {
    console.log(res);
    return false;
  }
};
