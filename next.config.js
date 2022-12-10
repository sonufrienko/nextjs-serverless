/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // THIS IS IMPORTANT
};

module.exports = nextConfig;
