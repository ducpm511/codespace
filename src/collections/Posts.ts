import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";
import { formatSlug } from "./hooks/formatSlug";

/**
 * Revalidate trang blog khi bài thay đổi. Bọc try/catch vì `revalidatePath`
 * chỉ hợp lệ trong ngữ cảnh request Next — chạy ngoài (seed/migration/CLI) sẽ ném lỗi.
 */
function revalidateBlog(slug?: string | null) {
  try {
    revalidatePath("/blog");
    if (slug) revalidatePath(`/blog/${slug}`);
  } catch {
    // Ngoài ngữ cảnh request Next — bỏ qua.
  }
}

/**
 * Bài blog. Bật draft/version — bài chỉ hiện trên website khi _status = 'published'.
 * Hook revalidate để trang tĩnh /blog cập nhật ngay khi xuất bản/sửa/xóa.
 */
export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "_status", "publishedAt"],
    description: "Viết & quản lý bài blog của CodeSpace.",
  },
  access: {
    // Website chỉ đọc bài đã xuất bản; user đăng nhập đọc được tất cả (kể cả nháp).
    read: ({ req }) => {
      if (req.user) return true;
      return { _status: { equals: "published" } };
    },
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  versions: {
    drafts: {
      autosave: { interval: 800 },
    },
    maxPerDoc: 20,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidateBlog(doc?.slug);
        return doc;
      },
    ],
    afterDelete: [
      ({ doc }) => {
        revalidateBlog(doc?.slug);
        return doc;
      },
    ],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "Tóm tắt ngắn",
      admin: {
        description: "Hiển thị ở danh sách blog & dùng cho mô tả SEO nếu bỏ trống.",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Nội dung",
    },
    // Sidebar
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "Để trống sẽ tự sinh từ tiêu đề.",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      label: "Ảnh bìa",
      admin: { position: "sidebar" },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      admin: { position: "sidebar" },
    },
    {
      name: "tags",
      type: "text",
      hasMany: true,
      admin: { position: "sidebar" },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      admin: { position: "sidebar" },
      defaultValue: ({ user }) => user?.id,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayAndTime" },
      },
      defaultValue: () => new Date().toISOString(),
    },
    // SEO
    {
      type: "group",
      name: "seo",
      label: "SEO",
      fields: [
        {
          name: "metaTitle",
          type: "text",
          admin: { description: "Bỏ trống sẽ dùng tiêu đề bài." },
        },
        {
          name: "metaDescription",
          type: "textarea",
          admin: { description: "Bỏ trống sẽ dùng tóm tắt." },
        },
      ],
    },
  ],
};
