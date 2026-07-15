import Link from "next/link";
import { courses } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";
import SectionHeading from "@/components/shared/SectionHeading";
import styles from "./CoursePreview.module.css";

export default function CoursePreview() {
  return (
    <section id="courses" className={styles.section}>
      <SectionHeading
        badge="Khóa học"
        badgeColor="#D85F18"
        badgeBg="#FCE9DD"
        title={`${courses.length} hành trình cho mọi đam mê công nghệ`}
        subtitle="Từ những khối lệnh kéo thả đầu tiên đến web, robot và STEAM — luôn có lộ trình phù hợp với con bạn."
        maxWidth={740}
      />
      <div className={styles.grid}>
        {courses.map((c) => (
          <div key={c.slug} className={styles.card}>
            <div className={styles.circle} style={{ background: c.tint }} aria-hidden />
            <div className={styles.inner}>
              <div className={styles.icon} style={{ background: c.color }} aria-hidden>
                {c.icon}
              </div>
              <span className={styles.age} style={{ color: c.accent, background: c.tint }}>
                {c.ageRange}
              </span>
              <h3 className={styles.title}>{c.previewTitle}</h3>
              <p className={styles.desc}>{c.previewDesc}</p>
              <Link
                href={courseDetails[c.slug] ? `/khoa-hoc/${c.slug}` : "/khoa-hoc"}
                className={styles.link}
              >
                Tìm hiểu khóa học →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
