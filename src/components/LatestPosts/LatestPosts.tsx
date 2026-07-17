import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/payload-types";
import { getPublishedPosts, asMedia, mediaUrl, formatDate } from "@/lib/blog";
import SectionHeading from "@/components/shared/SectionHeading";
import styles from "./LatestPosts.module.css";

/**
 * Section trang chủ: 3 bài blog mới nhất đã xuất bản.
 * Server component — đọc trực tiếp qua Payload Local API. Ẩn nếu chưa có bài.
 */
export default async function LatestPosts() {
  const { docs: posts } = await getPublishedPosts({ limit: 3 });
  if (posts.length === 0) return null;

  return (
    <section id="blog" className={styles.section}>
      <SectionHeading
        badge="Blog CodeSpace"
        badgeColor="#2B5FE3"
        badgeBg="#EAF0FF"
        title="Bài viết mới nhất"
        subtitle="Kiến thức lập trình, mẹo học và câu chuyện lớp học — cập nhật liên tục từ CodeSpace."
        maxWidth={620}
      />

      <div className={styles.grid}>
        {posts.map((post) => {
          const cover = asMedia(post.coverImage);
          const coverSrc = mediaUrl(cover);
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
              <div className={styles.body}>
                {category && <span className={styles.cat}>{category.name}</span>}
                <h3 className={styles.title}>{post.title}</h3>
                {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                <div className={styles.meta}>{formatDate(post.publishedAt)}</div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.more}>
        <Link href="/blog" className={styles.moreLink}>
          Xem tất cả bài viết →
        </Link>
      </div>
    </section>
  );
}
