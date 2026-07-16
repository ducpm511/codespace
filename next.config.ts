import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // KHÔNG bundle các package này — để chúng dùng fetch/undici gốc của Node.
  // Nếu bị Turbopack bundle, undici hiểu nhầm buffer là SharedArrayBuffer khi
  // upload lên Vercel Blob → lỗi "SharedArrayBuffer is not allowed" (500).
  serverExternalPackages: ["@vercel/blob", "@payloadcms/storage-vercel-blob"],
  images: {
    // Ảnh blog upload lên Vercel Blob → cần cho phép domain này với next/image.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
