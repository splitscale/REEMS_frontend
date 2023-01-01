import Cookies from 'js-cookie';

export function logoutInteractor(): void {
  Cookies.remove('authorization');
}
