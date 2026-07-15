"use client";

import { useState } from "react";
import Image from "next/image";
import type { Instructor } from "@/data/instructors";
import styles from "./InstructorSection.module.css";

export default function InstructorAvatar({ instructor }: { instructor: Instructor }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = instructor.photo && !failed;

  return (
    <div className={styles.avatarBox}>
      {showPhoto ? (
        <Image
          src={instructor.photo as string}
          alt={instructor.name}
          width={220}
          height={220}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={styles.initial} style={{ background: instructor.gradient }} aria-hidden>
          {instructor.initial}
        </span>
      )}
    </div>
  );
}
