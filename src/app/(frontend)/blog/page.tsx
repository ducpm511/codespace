import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/payload-types";
import { getPublishedPosts, asMedia, mediaUrl, formatDate } from "@/lib/blog";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./page.module.css";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Kiến thức lập trình & công nghệ cho trẻ",
  description:
    "Bài viết từ CodeSpace về lập trình cho trẻ em, Scratch, Python, robotics, STEM/STEAM, mẹo học và tin tức — đồng hành cùng phụ huynh và học viên.",
  keywords: [
    "blog lập trình cho trẻ em",
    "kiến thức lập trình cho trẻ",
    "học Scratch Python cho trẻ",
    "giáo dục STEM STEAM",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog CodeSpace — Kiến thức lập trình & công nghệ cho trẻ",
    description:
      "Bài viết về lập trình cho trẻ em, robotics, STEM/STEAM, mẹo học và tin tức từ CodeSpace.",
    url: "/blog",
  },
};

export default async function BlogListPage() {
  const { docs: posts } = await getPublishedPosts({ limit: 24 });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Trang chủ", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className={styles.hero}>
        <span className={styles.badge}>Blog CodeSpace</span>
        <h1 className={styles.title}>Kiến thức lập trình & công nghệ cho trẻ</h1>
        <p className={styles.lead}>
          Mẹo học, câu chuyện lớp học và tin tức mới nhất — đồng hành cùng phụ huynh và học viên
          trên hành trình công nghệ.
        </p>
      </section>

      {posts.length === 0 ? (
        <section className={styles.empty}>
          <div className={styles.emptyCard}>
            <span className={styles.emptyIcon} aria-hidden>
              ✏️
            </span>
            <h2 className={styles.emptyTitle}>Bài viết đầu tiên đang được chuẩn bị</h2>
            <p className={styles.emptyText}>
              CodeSpace sắp ra mắt những bài viết bổ ích. Hãy quay lại sau nhé!
            </p>
          </div>
        </section>
      ) : (
        <section className={styles.grid}>
          {posts.map((post) => {
            const cover = asMedia(post.coverImage);
            const coverSrc = mediaUrl(cover, "card");
            const category =
              post.category && typeof post.category === "object"
                ? (post.category as Category)
                : null;
            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.thumb}>
                  {coverSrc ? (
                    <Image
                      src={coverSrc}
                      alt={cover?.alt ?? post.title}
                      fill
                      sizes="(max-width: 720px) 100vw, 380px"
                      className={styles.thumbImg}
                    />
                  ) : (
                    <div className={styles.thumbFallback} aria-hidden>
                      📝
                    </div>
                  )}
                </div>
                <div className={styles.cardBody}>
                  {category && <span className={styles.cat}>{category.name}</span>}
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                  <div className={styles.meta}>{formatDate(post.publishedAt)}</div>
                </div>
              </Link>
            );
          })}
        </section>
      )}

      <Footer variant="simple" />
    </>
  );
}
