import { apiUrl } from '../apiconfigs/apiUrl';
import { UserRequest } from '../user/userRequest';

export const loginInteractor = (userRequest: UserRequest) => {
  console.debug('logging in user: ' + userRequest.username);

  return fetch(apiUrl('/auth/login'), {
    method: 'POST',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });
};
