import { User } from '../user/User';
import store from 'store';

export const getStoredUser = () => store.get('user') as User;
