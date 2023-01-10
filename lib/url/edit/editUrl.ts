import { apiUrl } from "../../apiconfigs/apiUrl";
import { storeInteractor } from "../../localStorage/storeInteractor";
import { UrlRequest } from "../UrlRequest";


export const editUrlHandler = async (
  containerId: number,
  newLink: string,
  urlID: number
): Promise<boolean> => {
  const urlRequest: UrlRequest = {
    containerID: containerId,
    innerUrl: newLink,
    urlID: urlID
  };

  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set('Authorization', storeInteractor.getToken());

  const config: RequestInit = {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(urlRequest),
  };

  const res = await fetch(apiUrl(`/urls/${urlID}`), config);

  if (res.ok) {
    return true;
  } else {
    console.log(res);
    return false;
  }
};