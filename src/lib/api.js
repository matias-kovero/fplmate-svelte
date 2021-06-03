const base = 'https://fpl-server.vercel.app/api';
const basic_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36';

async function send({ method, path, data, token}) {
  const opts = { method, headers: {} };

  opts.headers['User-Agent'] = basic_UA;

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  } 
  if (token) {
    opts.headers['Authorization'] = `Token ${token}`;
  }
  
  return fetch(`${base}/${path}`, opts)
  .then((r) => r.text())
  .then(json => {
    try { 
      return JSON.parse(json);
    } catch (err) {
      return json;
    }
  });
}

export async function get(path, token) {
  // Should we have awaits here?

  // Should we check data here ?, 
  // If {path} is found in store - return data from store - set invalidate rules?
  // https://stackoverflow.com/questions/64092593/svelte-is-there-a-way-to-cache-the-api-result-in-a-way-that-it-wont-trigger-th
  // https://www.reddit.com/r/sveltejs/comments/moehvi/confused_with_different_ways_to_fetch_api/

  // @ts-ignore
  return send({ method: 'GET', path, token });
}

export function del(path, token) {
  // @ts-ignore
  return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
  return send({ method: 'POST', path, data, token });
}
export function put(path, data, token) {
  return send({ method: 'PUT', path, data, token });
}