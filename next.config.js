/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/web',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
      },
    ],
  },
};
