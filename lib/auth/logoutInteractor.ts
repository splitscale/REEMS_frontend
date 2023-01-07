export function logoutInteractor(): void {
  localStorage.removeItem('Authorization');
  localStorage.removeItem('uid');
  localStorage.removeItem('username');
}
