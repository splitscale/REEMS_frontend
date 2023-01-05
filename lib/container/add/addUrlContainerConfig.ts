import { cookies } from '../../apiInteractor/cookies/cookies';

export const addUrlContainerConfig = {
  headers: {
    authorization: cookies.authBearer,
  },
};
