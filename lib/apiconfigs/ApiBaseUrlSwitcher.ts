export const ApiBaseUrlSwitcher = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('Using dev API url');

    return 'http://localhost:8081/api';
  } else {
    console.debug('Using production API url');

    return 'http://api:28762/api';
  }
};
