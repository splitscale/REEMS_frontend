import Axios from 'axios';
import { useRouter } from 'next/router';

export function LogoutButton() {
  const router = useRouter();

  const logout = (event:any) => {
    event.preventDefault();

    Axios.get('http://localhost:8080/auth/logout')
    .then((res) => {
      if (res.status === 200) {
        // Redirect to the login page
        router.push('/');
        }})
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <button className='fs-5 ms-5 fw-bold ' onClick={logout}>Logout</button>
  );
}

