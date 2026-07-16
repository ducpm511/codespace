import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // KHÔNG bundle @vercel/blob — để nó dùng fetch/undici gốc của Node.
  // Nếu bị Turbopack bundle, undici hiểu nhầm buffer là SharedArrayBuffer khi
  // upload lên Vercel Blob → lỗi "SharedArrayBuffer is not allowed" (500).
  // (KHÔNG externalize @payloadcms/storage-vercel-blob vì phần /client của nó
  //  import .css của react-image-crop → Node runtime không load được → vỡ build.)
  serverExternalPackages: ["@vercel/blob"],
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
