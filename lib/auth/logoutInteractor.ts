import Cookies from 'js-cookie';

export function logoutInteractor(): void {
  Cookies.remove('Authorization');
  Cookies.remove('uid');
  Cookies.remove('username');

}
