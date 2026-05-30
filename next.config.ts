import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/sssepp",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/sssepp",
  },
};

export default nextConfig;
