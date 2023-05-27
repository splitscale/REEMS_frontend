import { User } from '../User/user';
import store from 'store';

export const getStoredUser = () => store.get('user') as User;
