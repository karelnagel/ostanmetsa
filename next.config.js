/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure exported site works on static hosts without rewrites
  trailingSlash: true,
  images: {
    // Use a static-compatible image loader for next export (Next 12)
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
