import Image from "next/image";
import styles from "./MissionSection.module.css";

export default function MissionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Image
          src="/images/mascot-heart.png"
          alt=""
          width={104}
          height={104}
          className={styles.mascot}
        />
        <span className={styles.badge}>Sứ mệnh</span>
        <p className={styles.quote}>
          &ldquo;Mỗi buổi học, một đứa trẻ tạo ra điều gì đó của riêng mình — và tin rằng
          mình <span className={styles.accent}>làm được</span>.&rdquo;
        </p>
        <p className={styles.desc}>
          Chúng tôi không dạy trẻ ghi nhớ. Chúng tôi dạy trẻ tư duy, thử nghiệm, thất bại và
          làm lại — những kỹ năng quan trọng cho mọi ngành nghề trong kỷ nguyên số.
        </p>
      </div>
    </section>
  );
}
