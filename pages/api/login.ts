export default async function login(req: any, res: any) {
  const url = "http://localhost:8080/api/v1/login";

  const { username, password } = req.body;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      // Login successful, redirect to /home
      res.status(200).json({ message: "Login successful", username: {username} });
    } else {
      // Login failed, handle error
      res.status(response.status).json({ error: "Login failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
