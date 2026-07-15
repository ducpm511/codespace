import Link from "next/link";
import type { Course } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course }: { course: Course }) {
  const hasDetail = Boolean(courseDetails[course.slug]);
  const detailHref = `/khoa-hoc/${course.slug}`;

  return (
    <div id={course.slug} className={styles.card} style={{ scrollMarginTop: "96px" }}>
      <div className={styles.header} style={{ background: course.tint }}>
        <span className={styles.icon} style={{ background: course.color }} aria-hidden>
          {course.icon}
        </span>
        <div>
          <h3 className={styles.name}>
            {hasDetail ? (
              <Link href={detailHref} className={styles.nameLink}>
                {course.name}
              </Link>
            ) : (
              course.name
            )}
          </h3>
          <div className={styles.subtitle} style={{ color: course.subtitleColor }}>
            {course.subtitle}
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span
            className={styles.badge}
            style={{ color: course.accent, background: course.tint }}
          >
            👦 {course.ageRange}
          </span>
          <span className={`${styles.badge} ${styles.badgeNeutral}`}>⏱️ {course.duration}</span>
          <span className={`${styles.badge} ${styles.badgeNeutral}`}>{course.level}</span>
        </div>

        <div className={styles.learnTitle}>Bé sẽ học gì?</div>
        <div className={styles.learnList}>
          {course.learnings.map((l) => (
            <div key={l} className={styles.learnItem}>
              <span style={{ color: course.checkColor }}>✓</span> {l}
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <span className={styles.outcome}>
            🎁 Thành quả: <strong>{course.outcome}</strong>
          </span>
          {hasDetail ? (
            <Link href={detailHref} className={styles.cta}>
              Xem chi tiết →
            </Link>
          ) : (
            <Link href="/#dangky" className={styles.cta}>
              Học thử →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
