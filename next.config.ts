import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  /* @ts-ignore - allowedDevOrigins is required for network access in dev */
  allowedDevOrigins: ["192.168.1.33"],
};

export default nextConfig;
