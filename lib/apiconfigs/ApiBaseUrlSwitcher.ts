const devURL = 'http://localhost:20000/api';
const productionURL = 'http://fordastore-api:8081/api';

export const ApiBaseUrlSwitcher = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug('Using dev API url: ', devURL);
    return devURL;
  }

  console.debug('Using production API url: ', productionURL);
  return productionURL;
};
