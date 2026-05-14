import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Uncomment and set your repo name if deploying to a project page:
  // basePath: "/your-repo-name",
};

export default nextConfig;
