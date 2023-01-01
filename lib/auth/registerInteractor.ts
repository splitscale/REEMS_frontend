import axios, { AxiosError } from 'axios';
import { UserRequest } from '../user/userRequest';

export async function registerInteractor(
  userRequest: UserRequest
): Promise<boolean> {
  const url = 'http://localhost:8080/register';

  try {
    let res = await axios.post(url, userRequest);
    console.log(res.data);
  } catch (err: any) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // The client never received a response, and the request was never left
      console.log(err.request);
    } else {
      // Anything else
      console.log('Error', err.message);
    }

    return false;
  }

  return true;
}
