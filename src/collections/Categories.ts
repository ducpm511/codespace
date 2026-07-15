import type { CollectionConfig } from "payload";
import { formatSlug } from "./hooks/formatSlug";

/** Danh mục bài blog (vd: Kiến thức lập trình, Tin tức, Sự kiện...). */
export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug"],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "Để trống sẽ tự sinh từ tên.",
      },
      hooks: {
        beforeValidate: [formatSlug("name")],
      },
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
