import Image from "next/image";
import Link from "next/link";
import styles from "./HeroHome.module.css";

export default function HeroHome() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobYellow} aria-hidden />
      <div className={styles.blobBlue} aria-hidden />

      <div className={styles.left}>
        <span className={styles.badge}>🚀 Học viện công nghệ cho trẻ 7–16 tuổi</span>
        <h1 className={styles.title}>
          Nơi trẻ học lập trình,
          <br />
          robotics &amp; AI bằng cách <span className={styles.highlight}>làm thật</span>
        </h1>
        <p className={styles.desc}>
          Từ Scratch kéo thả đến Python, robot VEX và AI — mỗi học viên CodeSpace tự tay
          tạo ra sản phẩm thật, không chỉ học lý thuyết.
        </p>
        <div className={styles.actions}>
          <Link href="/#dangky" className={styles.btnPrimary}>
            Đăng ký học thử miễn phí
          </Link>
          <Link href="/#lotrinh" className={styles.btnGhost}>
            Xem lộ trình học →
          </Link>
        </div>
        <div className={styles.stats}>
          <div>
            <div className={styles.statNum}>200+</div>
            <div className={styles.statLabel}>học viên đã theo học</div>
          </div>
          <div className={styles.statDivider} />
          <div>
            <div className={styles.statNum}>4.9/5</div>
            <div className={styles.statLabel}>phụ huynh hài lòng</div>
          </div>
          <div className={styles.statDivider} />
          <div>
            <div className={styles.statNum}>7</div>
            <div className={styles.statLabel}>khóa học theo lộ trình</div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photo}>
          <Image
            src="/images/students-team.jpg"
            alt="Học viên CodeSpace"
            width={620}
            height={460}
            priority
            sizes="(max-width: 900px) 92vw, 620px"
          />
        </div>
        <div className={styles.floatCard}>
          <span className={styles.floatCardIcon}>🤖</span>
          <div>
            <div className={styles.floatCardTitle}>Robot tự lắp</div>
            <div className={styles.floatCardSub}>Lớp VEX Robotics</div>
          </div>
        </div>
        <div className={styles.floatBadge}>
          <div className={styles.floatBadgeNum}>100%</div>
          <div className={styles.floatBadgeSub}>thực hành trên dự án</div>
        </div>
        <Image
          src="/images/mascot-laptop.png"
          alt="Rex - mascot CodeSpace"
          width={140}
          height={140}
          className={styles.mascot}
        />
      </div>
    </section>
  );
}
