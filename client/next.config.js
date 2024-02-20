/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '149.50.136.81',
        port: '9000',
      },
    ],
  },
};
