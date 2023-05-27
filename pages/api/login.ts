export default async function loginHandler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { username, password } = req.body;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      // Login successful, redirect to /home
      res.status(200).json({ message: "Login successful" });
    } else {
      // Login failed, handle error
      res.status(response.status).json({ error: "Login failed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
