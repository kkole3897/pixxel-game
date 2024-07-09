import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'loremflickr.com',
      },
      {
        hostname: process.env.NEXT_PUBLIC_STORAGE_HOSTNAME,
        port: process.env.NEXT_PUBLIC_STORAGE_PORT,
      },
      {
        hostname: '*.kakaocdn.net',
      },
      {
        hostname: '*.googleusercontent.com',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
