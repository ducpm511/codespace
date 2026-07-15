import type { Media, Post } from "@/payload-types";
import { getPayloadClient } from "@/lib/payload";

/** Lấy danh sách bài đã xuất bản (mới nhất trước). */
export async function getPublishedPosts({
  limit = 12,
  page = 1,
}: { limit?: number; page?: number } = {}) {
  const payload = await getPayloadClient();
  return payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 1,
    limit,
    page,
  });
}

/** Lấy 1 bài đã xuất bản theo slug. */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: {
      and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }],
    },
    depth: 2,
    limit: 1,
  });
  return docs[0] ?? null;
}

/** Tất cả slug bài đã xuất bản — cho generateStaticParams & sitemap. */
export async function getAllPublishedSlugs(): Promise<string[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    depth: 0,
    limit: 1000,
    pagination: false,
  });
  return docs.map((d) => d.slug).filter((s): s is string => Boolean(s));
}

/** Media có thể là id (number) hoặc object đã populate — chỉ dùng khi đã populate. */
export function asMedia(value: Post["coverImage"]): Media | null {
  return value && typeof value === "object" ? value : null;
}

/** Chọn URL ảnh phù hợp theo kích thước ưu tiên. */
export function mediaUrl(
  media: Media | null,
  size: "card" | "cover" | "thumbnail" | "full" = "full"
): string | null {
  if (!media) return null;
  if (size !== "full") return media.sizes?.[size]?.url ?? media.url ?? null;
  return media.url ?? null;
}

/** Định dạng ngày kiểu Việt: 15 tháng 7, 2026 */
export function formatDate(input?: string | null): string {
  if (!input) return "";
  return new Date(input).toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
