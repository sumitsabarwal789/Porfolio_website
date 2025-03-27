/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "pbs.twimg.com",
      "images.unsplash.com",
      "assets.aceternity.com",
      "ichef.bbci.co.uk",
      "cdn-icons-png.flaticon.com",
    ], // Allow external images from Twitter
  },
};

export default nextConfig;
