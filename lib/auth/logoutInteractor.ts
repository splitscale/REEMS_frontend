import { storeInteractor } from '../localStorage/storeInteractor';

export function logoutInteractor(): void {
  storeInteractor.clearAll();
}
