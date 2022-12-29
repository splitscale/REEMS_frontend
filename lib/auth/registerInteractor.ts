import axios from 'axios';
import { UserRequest } from '../user/userRequest';

export async function registerInteractor(
  userRequest: UserRequest
): Promise<boolean> {
  const url = 'http://localhost:8080/auth/register';

  try {
    await axios.post(url, userRequest);
  } catch (error) {
    return false;
  }

  return true;
}
