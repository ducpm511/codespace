"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.head}>
        <span className={styles.badge}>Câu hỏi thường gặp</span>
        <h2 className={styles.title}>Phụ huynh thường hỏi</h2>
      </div>
      <div className={styles.list}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={styles.item}>
              <button
                className={styles.button}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.question}>{f.q}</span>
                <span className={styles.sign} aria-hidden>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <div className={`${styles.body} ${isOpen ? styles.open : ""}`}>
                <p className={styles.answer}>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
