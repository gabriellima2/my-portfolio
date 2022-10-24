/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    images: {
    domains: ["media.graphassets.com", "avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig;
