"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/khoa-hoc", label: "Khóa học", match: "/khoa-hoc" },
  { href: "/#lotrinh", label: "Lộ trình" },
  { href: "/#duan", label: "Dự án học viên" },
  { href: "/ve-chung-toi", label: "Về chúng tôi", match: "/ve-chung-toi" },
  { href: "/#faq", label: "Hỏi đáp" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (match?: string) => Boolean(match && pathname === match);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
        <Link href="/" className={styles.logo} aria-label={site.name}>
          <Image src="/images/logo.png" alt={site.name} width={140} height={40} priority />
        </Link>

        <div className={styles.links}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.match) ? styles.active : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.right}>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
          <Link href="/#dangky" className={styles.cta}>
            Học thử miễn phí
          </Link>
        </div>

        <button
          className={styles.burger}
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        </nav>
      </header>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} />
          <div className={styles.drawer} role="dialog" aria-modal="true">
            <div className={styles.drawerTop}>
              <Image src="/images/logo.png" alt={site.name} width={126} height={36} />
              <button className={styles.close} aria-label="Đóng menu" onClick={() => setOpen(false)}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={isActive(l.match) ? styles.active : undefined}
              >
                {l.label}
              </Link>
            ))}
            <a href={site.phoneHref} className={styles.drawerPhone} onClick={() => setOpen(false)} style={{ padding: "12px 8px", fontSize: 17, fontWeight: 600 }}>
              📞 {site.phone}
            </a>
            <Link href="/#dangky" className={styles.drawerCta} onClick={() => setOpen(false)} style={{ padding: "13px 8px", fontSize: 16, fontWeight: 700 }}>
              Học thử miễn phí
            </Link>
          </div>
        </>
      )}
    </>
  );
}
