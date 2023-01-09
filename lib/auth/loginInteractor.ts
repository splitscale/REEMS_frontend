import { apiUrl } from '../apiconfigs/apiUrl';
import { storeInteractor } from '../localStorage/storeInteractor';
import { User } from '../user/User';
import { UserRequest } from '../user/userRequest';

export const loginInteractor = async (
  userRequest: UserRequest
): Promise<boolean> => {
  console.debug('logging in user: ' + userRequest.username);

  const res = await fetch(apiUrl('/auth/login'), {
    method: 'POST',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    const token = res.headers.get('authorization');
    const user = (await res.json()) as User;

    console.debug('User logged in: ', user);
    console.debug('Authorization: ', token);

    if (token && user) {
      storeInteractor.setToken(token);
      storeInteractor.setUser(user);
    }
  } else {
    console.error('Error logging in user:' + res);
  }

  return res.ok;
};
