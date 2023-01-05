import { getAuthCookie } from './getAuthCookie';
import { getUidCookie } from './getUidCookie';
import { StoredCookies } from './storedCookies';

export const cookies: StoredCookies = {
  authBearer: getAuthCookie,
  uid: getUidCookie,
};
