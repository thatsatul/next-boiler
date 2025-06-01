import { cookies } from 'next/headers';

export function getUserFromCookie() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');

  if (!token) return null;

  // Optionally validate/parse token here
  return { name: 'Authenticated User', token: token.value };
}
