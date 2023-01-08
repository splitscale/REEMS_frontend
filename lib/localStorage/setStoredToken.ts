import store from 'store';

export const setStoredToken = (token: string) => store.set('token', token);
