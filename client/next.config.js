/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/help/:path*",
        destination: `${process.env.GITBOOK_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
