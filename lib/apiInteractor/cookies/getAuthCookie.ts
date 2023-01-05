import Cookies from 'js-cookie';

export const getAuthCookie = () => Cookies.get('Authorization');
