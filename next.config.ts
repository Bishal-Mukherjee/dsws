import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "tantuja.in" },
      { hostname: "www.fabindia.com" },
      { hostname: "cdni.sashaworld.com" },
      { hostname: "bandhancreations.com" },
    ],
  },
};

export default nextConfig;
