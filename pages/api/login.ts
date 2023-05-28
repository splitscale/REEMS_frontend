import { BaseUrl } from '../../public/config/baseUrl';

export default async function login(req: any, res: any) {
  const url = BaseUrl.resolve('/api/v1/login');

  const { username, password } = req.body;

  const response: Response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    res.status(response.status).json({ error: 'Login failed: ' });
  }

  res.status(response.status).json(await response.json());
}
