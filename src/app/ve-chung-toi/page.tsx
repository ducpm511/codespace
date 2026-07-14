import type { Metadata } from "next";
import Image from "next/image";
import MissionSection from "@/components/MissionSection/MissionSection";
import ValueSection from "@/components/ValueSection/ValueSection";
import InstructorSection from "@/components/InstructorSection/InstructorSection";
import LocationSection from "@/components/LocationSection/LocationSection";
import CTABand from "@/components/CTABand/CTABand";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Về CodeSpace — Học viện lập trình & công nghệ cho trẻ em",
  description:
    "CodeSpace là học viện lập trình & công nghệ cho trẻ 7–16 tuổi tại Bà Rịa - Vũng Tàu và Cần Thơ. Chúng tôi tin mỗi đứa trẻ đều có thể trở thành người kiến tạo, chứ không chỉ là người dùng công nghệ.",
  keywords: [
    "trung tâm lập trình cho trẻ em",
    "học viện công nghệ cho trẻ",
    "lập trình cho trẻ Bà Rịa Vũng Tàu",
    "lập trình cho trẻ Cần Thơ",
    "giáo dục STEM STEAM",
  ],
  alternates: { canonical: "/ve-chung-toi" },
  openGraph: {
    title: "Về CodeSpace — Học viện lập trình & công nghệ cho trẻ em",
    description:
      "Học viện lập trình & công nghệ cho trẻ 7–16 tuổi tại Bà Rịa - Vũng Tàu và Cần Thơ.",
    url: `/ve-chung-toi`,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Trang chủ", path: "/" },
          { name: "Về chúng tôi", path: "/ve-chung-toi" },
        ])}
      />
      <section className={styles.hero}>
        <div>
          <span className={styles.badge}>Câu chuyện của CodeSpace</span>
          <h1 className={styles.title}>
            Giúp trẻ Việt tự tin <span className={styles.accent}>sáng tạo</span> với công nghệ
          </h1>
          <p className={styles.lead}>
            Đội ngũ <strong>CodeSpace Việt Nam</strong> được vận hành bởi nhóm lập trình viên và chuyên gia nhân sự làm việc trong lĩnh vực công nghệ thông tin. 
            May mắn được làm việc hằng ngày, tiếp cận và cập nhật bởi các công nghệ mới nhất hiện nay, chúng tôi thấy được sức ảnh hưởng và tầm quan trọng của công nghệ đối với đời sống. 
            Chính vì vậy, mang nguyện vọng đưa công nghệ đến gần hơn cho hàng triệu trẻ em Việt Nam, CodeSpace mong muốn đem giáo dục về công nghệ và tư duy lập trình đến với các em.
          </p>
          <div className={styles.stats}>
            <div>
              <div className={styles.statNum}>2023</div>
              <div className={styles.statLabel}>năm thành lập</div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.statNum}>2</div>
              <div className={styles.statLabel}>cơ sở: TP Hồ Chí Minh &amp; Cần Thơ</div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.statNum}>200+</div>
              <div className={styles.statLabel}>học viên</div>
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <Image
            src="/images/students-team.jpg"
            alt="Đội ngũ & học viên CodeSpace"
            width={620}
            height={460}
            priority
          />
        </div>
      </section>

      <MissionSection />
      <ValueSection />
      <InstructorSection
        group="expert"
        badge="Chuyên môn & Uy tín"
        title="Chuyên gia & cố vấn chuyên môn"
        subtitle="Được dẫn dắt bởi các nhà sáng lập là lập trình viên và chuyên gia nhiều năm kinh nghiệm trong ngành công nghệ — trực tiếp xây dựng chương trình và cố vấn chuyên môn cho CodeSpace."
        showBio
        showTags={false}
      />
      <InstructorSection
        group="teacher"
        badge="Giảng dạy"
        title="Đội ngũ giáo viên"
        subtitle="Thầy cô được đào tạo bài bản về sư phạm và tâm lý lứa tuổi, đồng hành sát sao cùng từng học viên."
        showTags
      />
      <InstructorSection
        group="operation"
        badge="Vận hành"
        title="Đội ngũ vận hành"
        subtitle="Đội ngũ tư vấn, chăm sóc học viên và vận hành lớp học trơn tru mỗi ngày."
        showTags={false}
      />
      <LocationSection />
      <CTABand
        variant="center"
        blob
        title="Ghé thăm CodeSpace cùng con nhé!"
        text="Đăng ký một buổi học thử miễn phí để cảm nhận không khí lớp học và gặp gỡ thầy cô."
        buttonLabel="Đăng ký học thử miễn phí"
      />
      <Footer variant="simple" />
    </>
  );
}
