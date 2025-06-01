import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/dashboard/:path*'], // Add more protected routes as needed
};

export function middleware(request) {
  const token = request.cookies.get('auth_token');

  if (!token) {
    return new NextResponse('Unauthorized: Missing auth_token', {
      status: 401,
    });
  }

  return NextResponse.next();
}
