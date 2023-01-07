export const setAuthToken = (jwt: string) => {
  localStorage.setItem('Authorization', jwt);
};

