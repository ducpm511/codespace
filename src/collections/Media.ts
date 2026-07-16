import type { CollectionConfig } from "payload";

/**
 * Ảnh/media upload — lưu trên Vercel Blob (cấu hình ở payload.config.ts).
 * `alt` bắt buộc để tốt cho SEO & khả năng tiếp cận.
 */
export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true, // ảnh công khai để website hiển thị
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  upload: {
    mimeTypes: ["image/*"],
    // KHÔNG resize bằng sharp: buffer resize của sharp bị backed bởi
    // SharedArrayBuffer → undici chặn khi upload lên Vercel Blob (lỗi 500).
    // Ảnh gốc upload thẳng; responsive để next/image tối ưu ở frontend.
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Mô tả ảnh (alt)",
    },
    {
      name: "caption",
      type: "text",
      label: "Chú thích (tuỳ chọn)",
    },
  ],
};
