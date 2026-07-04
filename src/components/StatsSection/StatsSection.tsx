import styles from "./StatsSection.module.css";

const stats = [
  { num: "90%", color: "#FF7A2F", label: "đăng ký chính thức sau buổi học thử" },
  { num: "100+", color: "#2B5FE3", label: "giờ thực hành mỗi khóa học" },
  { num: "200+", color: "#1FB573", label: "dự án thực tế đã hoàn thành" },
  { num: "98%", color: "#FFC53D", label: "phụ huynh hài lòng & giới thiệu" },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className={styles.num} style={{ color: s.color }}>
              {s.num}
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
