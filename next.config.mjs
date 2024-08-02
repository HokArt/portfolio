import config from './postcss.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['openweathermap.org']
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'source-map'
    }
    return config
  }
};

export default nextConfig;