"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./InstructorSection.module.css";

export default function InstructorBio({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      // chỉ đo khi đang thu gọn (clamp) mới biết có tràn > 5 dòng không
      if (!expanded) setOverflowing(el.scrollHeight - el.clientHeight > 4);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text, expanded]);

  return (
    <div className={styles.bioWrap}>
      <p ref={ref} className={`${styles.bio} ${expanded ? "" : styles.bioClamp}`}>
        {text}
      </p>
      {overflowing && (
        <button
          type="button"
          className={styles.bioToggle}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Thu gọn" : "Xem thêm"}
        </button>
      )}
    </div>
  );
}
