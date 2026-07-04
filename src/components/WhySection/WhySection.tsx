import styles from "./WhySection.module.css";

const items = [
  {
    icon: "🛠️",
    bg: "#E7F7EF",
    title: "Học qua dự án thật",
    desc: "Mỗi buổi học tạo ra một sản phẩm: game, app, hay robot chạy được.",
  },
  {
    icon: "👩‍🏫",
    bg: "#EAF0FF",
    title: "Lớp nhỏ, kèm sát",
    desc: "Tối đa 1 giáo viên / 6 học viên, đảm bảo từng bé được hướng dẫn riêng.",
  },
  {
    icon: "🧭",
    bg: "#FFF3DA",
    title: "Lộ trình cá nhân hóa",
    desc: "Xác định trình độ đầu vào, xây lộ trình theo độ tuổi & sở thích của bé.",
  },
  {
    icon: "💼",
    bg: "#FCE9DD",
    title: "Giáo viên thực chiến",
    desc: "Đội ngũ kỹ sư & lập trình viên giàu kinh nghiệm, được đào tạo sư phạm.",
  },
];

export default function WhySection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it.title} className={styles.card}>
            <div className={styles.icon} style={{ background: it.bg }} aria-hidden>
              {it.icon}
            </div>
            <div className={styles.title}>{it.title}</div>
            <p className={styles.desc}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
