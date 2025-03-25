/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["pbs.twimg.com", "images.unsplash.com", "assets.aceternity.com"], // Allow external images from Twitter
  },
};

export default nextConfig;
