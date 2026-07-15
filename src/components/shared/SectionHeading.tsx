import styles from "./SectionHeading.module.css";

interface Props {
  badge: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  maxWidth?: number;
}

export default function SectionHeading({
  badge,
  badgeColor,
  badgeBg,
  title,
  subtitle,
  dark = false,
  maxWidth = 620,
}: Props) {
  return (
    <div className={styles.wrap} style={{ maxWidth }}>
      <span className={styles.badge} style={{ color: badgeColor, background: badgeBg }}>
        {badge}
      </span>
      <h2 className={`${styles.title} ${dark ? styles.dark : ""}`}>{title}</h2>
      {subtitle && (
        <p className={`${styles.subtitle} ${dark ? styles.dark : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
