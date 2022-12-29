import { UserRequest } from './userRequest';

export function UserRequestBuilder(
  username: string,
  password: string
): UserRequest {
  return {
    username,
    password,
  };
}
