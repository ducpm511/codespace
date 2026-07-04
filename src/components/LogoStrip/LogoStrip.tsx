import styles from "./LogoStrip.module.css";

const tools = ["Scratch", "Python", "Pygame", "Flask/Django", "VEX Robotics", "STEAM"];

export default function LogoStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <span className={styles.label}>Công cụ &amp; nền tảng học viên sử dụng:</span>
        {tools.map((t, i) => (
          <span key={t} style={{ display: "contents" }}>
            <span className={styles.tool}>{t}</span>
            {i < tools.length - 1 && <span className={styles.dot}>•</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
