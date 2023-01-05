import { cookies } from '../../apiInteractor/cookies/cookies';

export const getUrlContainerConfig = {
  headers: {
    authorization: cookies.authBearer,
  },
  params: {
    uid: cookies.uid,
  },
};
