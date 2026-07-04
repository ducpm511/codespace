import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import styles from "./TestimonialSection.module.css";

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <Image
          src="/images/mascot-love.png"
          alt=""
          width={90}
          height={90}
          className={styles.mascot}
        />
        <span className={styles.badge}>Cảm nhận phụ huynh</span>
        <h2 className={styles.title}>Niềm tin của hơn 200 gia đình</h2>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={`${styles.card} ${t.dark ? styles.dark : ""}`}>
            <div className={styles.stars} aria-label="5 trên 5 sao">
              ★★★★★
            </div>
            <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
            <div className={styles.author}>
              {t.avatar ? (
                <Image src={t.avatar} alt="" width={46} height={46} className={styles.avatar} />
              ) : (
                <span className={styles.initial} style={{ background: t.initialBg }}>
                  {t.initial}
                </span>
              )}
              <div>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.meta}>{t.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
