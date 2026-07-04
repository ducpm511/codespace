import type { Metadata } from "next";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard/CourseCard";
import CTABand from "@/components/CTABand/CTABand";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Khóa học",
  description:
    "Các khóa học công nghệ cho trẻ 7–16 tuổi tại CodeSpace: Scratch cơ bản & nâng cao, Python cơ bản & nâng cao, Lập trình web với Python, VEX Robotics và Workshop STEAM.",
};

export default function CoursesPage() {
  return (
    <>
      <section className={styles.hero}>
        <span className={styles.badge}>Tất cả khóa học</span>
        <h1 className={styles.title}>Chọn hành trình công nghệ cho con</h1>
        <p className={styles.lead}>
          {courses.length} khóa học được thiết kế theo độ tuổi và trình độ — mỗi khóa đều lấy{" "}
          <strong>thực hành trên dự án</strong> làm trọng tâm.
        </p>
      </section>

      <section className={styles.grid}>
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </section>

      <CTABand
        variant="split"
        mascot
        title="Chưa biết con phù hợp khóa nào?"
        text="Đặt lịch một buổi học thử miễn phí — CodeSpace sẽ đánh giá trình độ và gợi ý lộ trình tốt nhất cho bé."
        buttonLabel="Nhận tư vấn miễn phí"
      />

      <Footer variant="simple" />
    </>
  );
}
