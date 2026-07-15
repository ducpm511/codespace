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
    imageSizes: [
      { name: "thumbnail", width: 400 },
      { name: "card", width: 800 },
      { name: "cover", width: 1600 },
    ],
    focalPoint: true,
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
