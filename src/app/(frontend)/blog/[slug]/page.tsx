import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Category, User } from "@/payload-types";
import {
  getPostBySlug,
  getAllPublishedSlugs,
  asMedia,
  mediaUrl,
  formatDate,
} from "@/lib/blog";
import { site } from "@/data/site";
import Footer from "@/components/Footer/Footer";
import CTABand from "@/components/CTABand/CTABand";
import JsonLd from "@/components/JsonLd/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/structuredData";
import styles from "./page.module.css";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const cover = mediaUrl(asMedia(post.coverImage));
  const description = post.seo?.metaDescription || post.excerpt || undefined;
  return {
    title: post.seo?.metaTitle || post.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.seo?.metaTitle || post.title,
      description,
      url: `/blog/${slug}`,
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt,
      ...(cover ? { images: [cover] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const cover = asMedia(post.coverImage);
  const coverSrc = mediaUrl(cover);
  const category =
    post.category && typeof post.category === "object"
      ? (post.category as Category)
      : null;
  const author =
    post.author && typeof post.author === "object" ? (post.author as User) : null;

  return (
    <article className={styles.page}>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.seo?.metaDescription || post.excerpt || undefined,
            slug,
            image: coverSrc
              ? coverSrc.startsWith("http")
                ? coverSrc
                : `${site.url}${coverSrc}`
              : null,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            authorName: author?.name,
          }),
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${slug}` },
          ]),
        ]}
      />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <Link href="/blog">Blog</Link>
        <span>/</span>
        <span>{post.title}</span>
      </nav>

      <header className={styles.header}>
        {category && <span className={styles.cat}>{category.name}</span>}
        <h1 className={styles.title}>{post.title}</h1>
        {post.excerpt && <p className={styles.lead}>{post.excerpt}</p>}
        <div className={styles.byline}>
          {author?.name && <span className={styles.author}>{author.name}</span>}
          {author?.name && post.publishedAt && <span className={styles.dot}>·</span>}
          {post.publishedAt && <time>{formatDate(post.publishedAt)}</time>}
        </div>
      </header>

      {coverSrc && (
        <div className={styles.cover}>
          <Image
            src={coverSrc}
            alt={cover?.alt ?? post.title}
            width={cover?.width ?? 1600}
            height={cover?.height ?? 900}
            priority
            className={styles.coverImg}
          />
        </div>
      )}

      <div className={styles.content}>
        <RichText data={post.content} />
      </div>

      <div className={styles.spacer} />
      <CTABand
        variant="split"
        mascot
        title="Cho con trải nghiệm một buổi học thật"
        text="Đăng ký học thử miễn phí — CodeSpace sẽ tư vấn lộ trình phù hợp với bé."
        buttonLabel="Đăng ký học thử miễn phí"
      />
      <Footer variant="simple" />
    </article>
  );
}
