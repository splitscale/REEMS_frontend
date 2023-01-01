import axios from 'axios';
import Cookies from 'js-cookie';
import { UserRequest } from '../user/userRequest';

export async function loginInteractor(userRequest: UserRequest): Promise<any> {
  const url = 'http://localhost:8080/login';

  try {
    let res = await axios.post(url, userRequest);

    let authToken = res.headers['authorization'];

    console.log(authToken);
    console.log(res.data);

    if (authToken) {
      Cookies.set('authorization', `Bearer ${authToken}`);
      Cookies.attributes.sameSite;
    }
    return res.data;
  } catch (error) {
    console.log(error);
    return;
  }
}
