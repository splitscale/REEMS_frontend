import { apiUrl } from './apiconfigs/apiUrl';
import { UserRequest } from './user/userRequest';

export async function testApiService() {
  console.log('Testing');

  // register();
  login();
}

async function register() {
  const userRequest: UserRequest = {
    username: 'joejoe',
    password: 'Password1234',
  };

  const res = await fetch(apiUrl('/auth/register'), {
    method: 'post',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.status === 200) {
    console.debug(res);
    console.debug('SUCCESS');
  }

  console.debug('FAILED');
  console.debug(res);
}

async function login() {
  const userRequest: UserRequest = {
    username: 'joejoe',
    password: 'Password1234',
  };

  const res = await fetch(apiUrl('/auth/login'), {
    method: 'post',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.ok) {
    console.debug(await res.json());
    console.debug('SUCCESS');
  } else {
    console.debug('FAILED');
    console.debug(res);
  }
}
