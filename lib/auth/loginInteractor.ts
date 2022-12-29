import axios from 'axios';
import { UserRequest } from '../user/userRequest';

export async function loginInteractor(
  userRequest: UserRequest
): Promise<boolean> {
  const url = 'http://localhost:8080/auth/login';

  try {
    let res = await axios.post(url, userRequest);

    console.log(res.headers['authorization']);
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
}
