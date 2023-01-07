import { User } from './User';

export function parseJsonUser(json: any): User {
  return {
    uid: json.uid,
    username: json.username,
  };
}
