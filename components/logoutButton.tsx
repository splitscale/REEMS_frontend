import { useRouter } from 'next/router';
import { logoutInteractor } from '../lib/auth/logoutInteractor';

export function LogoutButton() {
  const router = useRouter();

  const logout = (event: any) => {
    event.preventDefault();

    logoutInteractor();

    router.push('/');
  };

  return (
    <button className='fs-5 font-serif text-dark mx-4 text-decoration-underline' onClick={logout}> Logout </button>
  );
}
