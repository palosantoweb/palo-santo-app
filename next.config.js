/** @type {import('next').NextConfig} */
module.exports = {
  pagesDir: 'web/app',
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
