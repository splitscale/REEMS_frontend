import { User } from '../user/User';
import store from 'store';

export const setStoredUser = (user: User) => store.set('user', user);
