import { getAuthCookie } from './getAuthCookie';
import { getUidCookie } from './getUidCookie';
import { StoredCookies } from './StoredCookies';

export const cookies: StoredCookies = {
  authBearer: getAuthCookie,
  uid: getUidCookie,
};
