import SectionHeading from "@/components/shared/SectionHeading";
import styles from "./ValueSection.module.css";

const values = [
  {
    icon: "🔄",
    bg: "#E7F7EF",
    title: "Thích ứng",
    desc: "Linh hoạt đổi mới theo công nghệ và nhịp học của từng bé.",
  },
  {
    icon: "💛",
    bg: "#FCE9DD",
    title: "Tận tâm",
    desc: "Đồng hành sát sao, đặt sự tiến bộ của mỗi học viên lên hàng đầu.",
  },
  {
    icon: "🤗",
    bg: "#EFEAFF",
    title: "Thấu cảm",
    desc: "Lắng nghe và hiểu tâm lý để dạy đúng cách mỗi con cần.",
  },
  {
    icon: "🧠",
    bg: "#EAF0FF",
    title: "Trí tuệ",
    desc: "Khơi dậy tư duy, sáng tạo và tinh thần học hỏi suốt đời.",
  },
  {
    icon: "🛡️",
    bg: "#FFF3DA",
    title: "Chính trực",
    desc: "Trung thực, minh bạch trong giảng dạy và cam kết với phụ huynh.",
  },
];

export default function ValueSection() {
  return (
    <section className={styles.section}>
      <SectionHeading
        badge="Giá trị cốt lõi"
        badgeColor="#1FB573"
        badgeBg="#E7F7EF"
        title="Điều chúng tôi luôn giữ vững"
        maxWidth={600}
      />
      <div className={styles.grid}>
        {values.map((v) => (
          <div key={v.title} className={styles.card}>
            <div className={styles.icon} style={{ background: v.bg }} aria-hidden>
              {v.icon}
            </div>
            <h3 className={styles.title}>{v.title}</h3>
            <p className={styles.desc}>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
