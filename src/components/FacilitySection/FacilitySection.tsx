import Image from "next/image";
import styles from "./FacilitySection.module.css";

const features = [
  {
    icon: "🤖",
    bg: "#FCE9DD",
    title: "Phòng lab Robotics riêng",
    desc: "Bộ VEX Robotics chính hãng & sa bàn thi đấu chuẩn.",
  },
  {
    icon: "💻",
    bg: "#EAF0FF",
    title: "Máy tính & tablet cấu hình tốt",
    desc: "Mỗi học viên một thiết bị riêng, không phải dùng chung.",
  },
  {
    icon: "🏆",
    bg: "#E7F7EF",
    title: "Khu trưng bày sản phẩm",
    desc: "Nơi các bạn nhỏ tự hào giới thiệu dự án của mình.",
  },
  {
    icon: "🎉",
    bg: "#EFEAFF",
    title: "Cộng đồng ấm áp",
    desc: "Sinh nhật, sự kiện & cuộc thi giúp con thêm gắn kết và tự tin.",
  },
];

export default function FacilitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <span className={styles.badge}>Cơ sở vật chất</span>
          <h2 className={styles.title}>Không gian học sáng tạo, đầy đủ thiết bị</h2>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <span className={styles.featureIcon} style={{ background: f.bg }} aria-hidden>
                  {f.icon}
                </span>
                <div>
                  <div className={styles.featureTitle}>{f.title}</div>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imgGrid}>
          <div className={styles.imgTall}>
            <Image
              src="/images/students-laptops.jpg"
              alt="Lớp học CodeSpace"
              width={360}
              height={360}
            />
          </div>
          <div className={styles.imgSmall}>
            <Image
              src="/images/student-celebrate.jpg"
              alt="Niềm vui học viên"
              width={240}
              height={170}
            />
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>2</div>
            <div className={styles.statLabel}>cơ sở: Bà Rịa &amp; Cần Thơ (sắp mở)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
