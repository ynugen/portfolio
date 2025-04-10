import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "." : "",
  output: "export",
};

export default nextConfig;
