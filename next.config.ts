import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "*.supabase.co" },
      { hostname: "s3.ap-south-1.amazonaws.com" },
    ],
  },
};

export default nextConfig;
