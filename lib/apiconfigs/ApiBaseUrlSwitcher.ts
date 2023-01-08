const devURL = 'http://localhost:20000/api';
const productionURL = 'http://34.143.216.186:20001/api';

export const ApiBaseUrlSwitcher = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('Using dev API url: ', devURL);
    return devURL;
  }

  console.debug('Using production API url: ', productionURL);
  return productionURL;
};
