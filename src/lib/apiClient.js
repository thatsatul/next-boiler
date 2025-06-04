export async function apiCall(url, {
  method = 'GET',
  data = null,
  headers = {},
  credentials = 'same-origin',
} = {}) {
  console.log('INFO: apiCall: called with url: ', url);
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    credentials,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || res.statusText);
  }

  return res.json();
}