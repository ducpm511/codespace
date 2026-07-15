import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { courseDetails } from "@/data/courseDetails";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/khoa-hoc", "/ve-chung-toi"];
  const courseRoutes = Object.keys(courseDetails).map((slug) => `/khoa-hoc/${slug}`);

  return [...staticRoutes, ...courseRoutes].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/khoa-hoc/") ? 0.7 : 0.8,
  }));
}
