import Image from "next/image";
import Link from "next/link";
import styles from "./CTABand.module.css";

interface Props {
  variant: "split" | "center";
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref?: string;
  /** mascot bay (Courses help band) */
  mascot?: boolean;
  /** blob mờ trang trí (About CTA) */
  blob?: boolean;
}

export default function CTABand({
  variant,
  title,
  text,
  buttonLabel,
  buttonHref = "/#dangky",
  mascot = false,
  blob = false,
}: Props) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      {mascot && (
        <Image
          src="/images/mascot-fly.png"
          alt=""
          width={120}
          height={120}
          className={styles.mascot}
        />
      )}
      <div className={styles.band}>
        {blob && <div className={styles.blob} aria-hidden />}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <Link href={buttonHref} className={styles.button}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
