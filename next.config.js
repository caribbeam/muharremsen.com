/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.muharremsen.com" }],
        destination: "https://muharremsen.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

