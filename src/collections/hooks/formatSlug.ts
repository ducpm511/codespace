import type { FieldHook } from "payload";

/** Chuẩn hóa chuỗi thành slug thân thiện URL, hỗ trợ tiếng Việt (bỏ dấu). */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // bỏ dấu tiếng Việt
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Hook cho field `slug`: nếu chưa nhập slug thì tự sinh từ field nguồn (mặc định `title`).
 */
export const formatSlug =
  (fallback = "title"): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === "string" && value.length > 0) return slugify(value);
    const source = data?.[fallback] || originalDoc?.[fallback];
    if (typeof source === "string") return slugify(source);
    return value;
  };
