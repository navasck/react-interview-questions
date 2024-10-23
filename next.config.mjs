/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'staging.aarong.com',
      },
      {
        protocol: 'https',
        hostname: 'www.aarong.com',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
      },
    ],
  },
};

export default nextConfig;
