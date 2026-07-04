import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 — Không tìm thấy trang",
};

export default function NotFound() {
  return (
    <>
      <section className={styles.wrap}>
        <div className={styles.blob} aria-hidden />
        <Image
          src="/images/mascot-fly.png"
          alt=""
          width={148}
          height={148}
          className={styles.mascot}
          priority
        />
        <p className={styles.code}>
          4<span>0</span>4
        </p>
        <h1 className={styles.title}>Ối! Trang này đi lạc mất rồi</h1>
        <p className={styles.text}>
          Có vẻ trang bạn tìm đã trôi đâu đó trong vũ trụ CodeSpace. Cùng quay về nơi bắt
          đầu và tiếp tục hành trình khám phá công nghệ nhé!
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            Về trang chủ
          </Link>
          <Link href="/khoa-hoc" className={styles.btnGhost}>
            Xem khóa học →
          </Link>
        </div>
      </section>
      <Footer variant="simple" />
    </>
  );
}
