import type { CollectionConfig } from "payload";

const isAdmin = ({ req }: { req: { user?: { roles?: string[] } | null } }) =>
  Boolean(req.user?.roles?.includes("admin"));

/**
 * Người dùng admin (đăng nhập vào /admin). Có auth sẵn của Payload.
 * roles: 'admin' (toàn quyền) | 'author' (viết bài).
 */
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "roles"],
  },
  access: {
    // Chỉ admin mới tạo/sửa/xóa user; ai đăng nhập cũng đọc được danh sách.
    read: ({ req }) => Boolean(req.user),
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      defaultValue: ["author"],
      options: [
        { label: "Admin", value: "admin" },
        { label: "Tác giả", value: "author" },
      ],
      access: {
        // Chỉ admin được đổi quyền.
        update: isAdmin,
      },
    },
  ],
};
