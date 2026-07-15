import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Footer.module.css";

function BottomBar() {
  return (
    <div className={styles.bottom}>
      <div className={styles.bottomInner}>
        © 2026 {site.name}. {site.tagline}
      </div>
    </div>
  );
}

/** Footer đầy đủ 4 cột — dùng cho trang chủ */
function FullFooter() {
  return (
    <footer className={`${styles.footer} ${styles.full}`}>
      <div className={styles.gridFull}>
        <div className={styles.brand}>
          <Image src="/images/logo-white.png" alt={site.name} width={140} height={40} />
          <p className={styles.brandText}>
            {site.tagline}
          </p>
        </div>

        <div>
          <div className={styles.colTitle}>Khóa học</div>
          <div className={styles.colLinks}>
            <Link href="/khoa-hoc">Scratch</Link>
            <Link href="/khoa-hoc">Python</Link>
            <Link href="/khoa-hoc">Lập trình web</Link>
            <Link href="/khoa-hoc">VEX Robotics</Link>
            <Link href="/khoa-hoc">Workshop STEAM</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Khám phá</div>
          <div className={styles.colLinks}>
            <Link href="/#lotrinh">Lộ trình học</Link>
            <Link href="/#duan">Dự án học viên</Link>
            <Link href="/ve-chung-toi">Về chúng tôi</Link>
            <Link href="/#faq">Câu hỏi thường gặp</Link>
          </div>
        </div>

        <div>
          <div className={styles.colTitle}>Liên hệ</div>
          <div className={styles.colLinks}>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
              📍 {site.address}
            </a>
            <a href={site.phoneHref}>📞 {site.phone}</a>
            <a href={site.mobileHref}>📱 {site.mobile}</a>
            <a href={`mailto:${site.email}`}>✉️ {site.email}</a>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer">
              📘 Facebook
            </a>
          </div>
        </div>
      </div>
      <BottomBar />
    </footer>
  );
}

/** Footer đơn giản 1 hàng — dùng cho Khóa học & Về chúng tôi */
function SimpleFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.rowSimple}>
        <Image src="/images/logo-white.png" alt={site.name} width={133} height={38} />
        <div className={styles.simpleLinks}>
          <Link href="/">Trang chủ</Link>
          <Link href="/khoa-hoc">Khóa học</Link>
          <Link href="/ve-chung-toi">Về chúng tôi</Link>
          <Link href="/#faq">Hỏi đáp</Link>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <span>📞 {site.phone}</span>
        </div>
      </div>
      <BottomBar />
    </footer>
  );
}

export default function Footer({
  variant = "full",
}: {
  variant?: "full" | "simple";
}) {
  return variant === "simple" ? <SimpleFooter /> : <FullFooter />;
}
