export async function post({ body }) {
  console.log('[OUT] Bye', body.value);

  const headers = {
    'Set-Cookie': `entry=; Path=/; HttpOnly; expires=Thu, 01 Jan 1970 00:00:01 GMT`// maxAge=${60*60};`
  };

  return {
    status: 200,
    headers,
    body: {
      message: "Success"
    }
  }
}