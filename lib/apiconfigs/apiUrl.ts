import { ApiBaseUrlSwitcher } from './ApiBaseUrlSwitcher';

export const apiUrl = (endpoint: string): string => {
  const baseUrl = ApiBaseUrlSwitcher();
  return baseUrl + endpoint;
};
