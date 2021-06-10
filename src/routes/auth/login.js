// Post selected profile to the server and save it to session
// Naive af - may brake at any point
export async function post({ body }) {
  console.log('[S] Login:', body.owner, body.id);

  const headers = {
    'Set-Cookie': `entry=${body.value}; Path=/; HttpOnly;`// maxAge=${60*60};`
  };

  return {
    status: 200,
    headers,
    body: {
      message: "Success"
    }
  }
}