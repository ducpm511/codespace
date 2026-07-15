import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { courseDetails } from "@/data/courseDetails";
import { getPayloadClient } from "@/lib/payload";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = ["", "/khoa-hoc", "/ve-chung-toi", "/blog"];
  const courseRoutes = Object.keys(courseDetails).map((slug) => `/khoa-hoc/${slug}`);

  const base: MetadataRoute.Sitemap = [...staticRoutes, ...courseRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/khoa-hoc/") ? 0.7 : 0.8,
  }));

  // Bài blog động — bọc try/catch để sitemap vẫn hoạt động nếu DB chưa sẵn sàng.
  let posts: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      depth: 0,
      limit: 1000,
      pagination: false,
    });
    posts = docs
      .filter((d) => d.slug)
      .map((d) => ({
        url: `${site.url}/blog/${d.slug}`,
        lastModified: new Date(d.updatedAt),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  } catch {
    // DB chưa cấu hình / không kết nối được → chỉ trả route tĩnh.
  }

  return [...base, ...posts];
}
