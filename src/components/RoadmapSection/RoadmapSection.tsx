import SectionHeading from "@/components/shared/SectionHeading";
import styles from "./RoadmapSection.module.css";

const stages = [
  {
    num: "1",
    color: "#1FB573",
    stage: "Khởi đầu",
    ages: "7 – 9 tuổi",
    items: ["Scratch & tư duy thuật toán", "STEAM & khoa học cơ bản", "Làm quen robot & lắp ráp"],
    outcome: "game & hoạt hình đầu tay",
  },
  {
    num: "2",
    color: "#2B5FE3",
    stage: "Tăng tốc",
    ages: "10 – 12 tuổi",
    items: ["Python cơ bản", "VEX Robotics & cảm biến", "Scratch nâng cao & sáng tạo game"],
    outcome: "game & robot hoàn thiện",
  },
  {
    num: "3",
    color: "#FF7A2F",
    stage: "Bứt phá",
    ages: "13 – 16 tuổi",
    items: ["Python nâng cao & xử lý dữ liệu", "Lập trình web với Python", "Dự án thực tế & portfolio"],
    outcome: "portfolio dự án thực tế",
  },
];

export default function RoadmapSection() {
  return (
    <section id="lotrinh" className={styles.section}>
      <div className={styles.blob} aria-hidden />
      <div className={styles.inner}>
        <SectionHeading
          badge="Lộ trình học theo độ tuổi"
          badgeColor="#FFC53D"
          badgeBg="rgba(255,255,255,.12)"
          title="Đồng hành cùng con từ 7 đến 16 tuổi"
          subtitle="Một hành trình liền mạch — mỗi giai đoạn xây nền cho giai đoạn tiếp theo."
          dark
          maxWidth={640}
        />
        <div className={styles.grid}>
          {stages.map((s) => (
            <div key={s.num} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.num} style={{ background: s.color }}>
                  {s.num}
                </span>
                <div>
                  <div className={styles.stage}>{s.stage}</div>
                  <div className={styles.ages}>{s.ages}</div>
                </div>
              </div>
              <div className={styles.list}>
                {s.items.map((it) => (
                  <div key={it} className={styles.item}>
                    <span style={{ color: s.color }}>●</span> {it}
                  </div>
                ))}
              </div>
              <div className={styles.outcome}>
                🎁 Thành quả: <strong>{s.outcome}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
