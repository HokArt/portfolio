import config from './postcss.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        pathname: '/**'
      },
    ],
  },
};

export default nextConfig;