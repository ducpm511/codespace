import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";
import { site } from "@/data/site";
import CTABand from "@/components/CTABand/CTABand";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import { courseSchema, breadcrumbSchema } from "@/lib/structuredData";
import styles from "./page.module.css";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(courseDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const detail = courseDetails[slug];
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    keywords: detail.keywords,
    alternates: { canonical: `/khoa-hoc/${slug}` },
    openGraph: {
      title: `${detail.metaTitle} | ${site.name}`,
      description: detail.metaDescription,
      url: `/khoa-hoc/${slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: Params) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const detail = courseDetails[slug];
  if (!course || !detail) notFound();

  const themeVars = {
    "--c": course.color,
    "--tint": course.tint,
  } as CSSProperties;

  return (
    <div className={styles.page} style={themeVars}>
      <JsonLd
        data={[
          courseSchema(slug),
          breadcrumbSchema([
            { name: "Trang chủ", path: "/" },
            { name: "Khóa học", path: "/khoa-hoc" },
            { name: course.name, path: `/khoa-hoc/${slug}` },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <Link href="/khoa-hoc">Khóa học</Link>
        <span>/</span>
        <span>{course.name}</span>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroTop}>
          <div className={styles.icon} aria-hidden>
            {course.icon}
          </div>
          <div>
            <div className={styles.eyebrow}>{course.subtitle}</div>
            <h1 className={styles.title}>{course.name}</h1>
          </div>
        </div>
        <p className={styles.tagline}>{detail.tagline}</p>
        <div className={styles.badges}>
          <div className={styles.badge}>
            👦 <b>{course.ageRange}</b>
          </div>
          <div className={styles.badge}>
            📅 <b>{detail.months}</b> · {detail.sessions}
          </div>
          <div className={styles.badge}>⏱️ {detail.schedule}</div>
          <div className={styles.badge}>🎓 {course.level}</div>
        </div>
        <div className={styles.actions}>
          <Link href="/#dangky" className={styles.btnPrimary}>
            Đăng ký học thử miễn phí
          </Link>
          <a href={site.phoneHref} className={styles.btnGhost}>
            📞 Gọi tư vấn: {site.phone}
          </a>
        </div>
      </header>

      {/* Intro + facts */}
      <div className={styles.layout}>
        <div>
          <p className={styles.intro}>{detail.intro}</p>
        </div>
        <aside className={styles.facts}>
          <div className={styles.factRow}>
            <div className={styles.factLabel}>Thời lượng</div>
            <div className={styles.factValue}>
              {detail.months} · {detail.sessions}
            </div>
          </div>
          <div className={styles.factRow}>
            <div className={styles.factLabel}>Lịch học</div>
            <div className={styles.factValue}>{detail.schedule}</div>
          </div>
          <div className={styles.factRow}>
            <div className={styles.factLabel}>Độ tuổi</div>
            <div className={styles.factValue}>{course.ageRange}</div>
          </div>
          <div className={styles.factRow}>
            <div className={styles.factLabel}>Yêu cầu đầu vào</div>
            <ul className={styles.factList}>
              {detail.prerequisites.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          {detail.tools && detail.tools.length > 0 && (
            <div className={styles.factRow}>
              <div className={styles.factLabel}>Công cụ & công nghệ</div>
              <div className={styles.chips}>
                {detail.tools.map((t) => (
                  <span key={t} className={styles.chip}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Knowledge + skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Con sẽ đạt được gì?</h2>
        <div className={styles.twoCol}>
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <span aria-hidden>📚</span> Kiến thức đạt được
            </div>
            <ul className={styles.list}>
              {detail.knowledge.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelHead}>
              <span aria-hidden>⚡</span> Kỹ năng đạt được
            </div>
            <ul className={styles.list}>
              {detail.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kế hoạch giảng dạy</h2>
        <div className={styles.roadmap}>
          {detail.curriculum.map((block, i) => (
            <div key={block.title} className={styles.block}>
              <div className={styles.blockNum}>{i + 1}</div>
              <div>
                <div className={styles.blockTitle}>{block.title}</div>
                <ul className={styles.blockItems}>
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      {detail.projects && detail.projects.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dự án tiêu biểu trong khóa học</h2>
          <div className={styles.projGrid}>
            {detail.projects.map((p) => (
              <div key={p.name} className={styles.projCard}>
                <div className={styles.projName}>
                  <span aria-hidden>🚀</span> {p.name}
                </div>
                <p className={styles.projDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Assessment */}
      <section className={styles.section}>
        <div className={styles.assess}>
          <h2 className={styles.assessTitle}>Đánh giá kết quả đầu ra</h2>
          <ul className={styles.assessList}>
            {detail.assessment.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.spacer} />

      <CTABand
        variant="split"
        mascot
        title={`Cho con học thử khóa ${course.name}`}
        text="Đặt lịch một buổi học thử miễn phí — CodeSpace sẽ đánh giá trình độ và tư vấn lộ trình phù hợp nhất cho bé."
        buttonLabel="Đăng ký học thử miễn phí"
      />
      <Footer variant="simple" />
    </div>
  );
}
