import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Tất cả ảnh đều local trong /public — không cần images.domains.
};

export default nextConfig;
