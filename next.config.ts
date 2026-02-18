import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.steampowered.com",
        pathname: "/steamcommunity/public/images/apps/**",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
};

export default nextConfig;
