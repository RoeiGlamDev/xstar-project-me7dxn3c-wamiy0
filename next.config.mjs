import { NextResponse } from 'next/server';

export const config = {
  images: {
    domains: ['your-image-source.com'], // Replace with your image source
  },
  reactStrictMode: true,
  optimizeFonts: true,
  experimental: {
    optimizeCss: true
}
};

export default function middleware(req) {
  const { pathname } = req.nextUrl;

  // Add any custom middleware logic here
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}