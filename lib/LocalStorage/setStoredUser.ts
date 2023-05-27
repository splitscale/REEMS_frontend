import { User } from '../User/user';
import store from 'store';

export const setStoredUser = (user: User) => store.set('user', user);
