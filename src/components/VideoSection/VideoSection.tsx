"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import SectionHeading from "@/components/shared/SectionHeading";
import styles from "./VideoSection.module.css";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(site.youtubeId);

  return (
    <section className={styles.section}>
      <SectionHeading
        badge="CodeSpace trên truyền hình"
        badgeColor="#2B5FE3"
        badgeBg="#EAF0FF"
        title="Phóng sự về CodeSpace trên sóng truyền hình"
        subtitle="CodeSpace tự hào là 1 trong những doanh nghiệp khởi nghiệp Đổi mới sáng tạo tiên phong trong lĩnh vực giáo dục STEAM, giáo dục chuyển đổi số tại tỉnh Bà Rịa - Vũng Tàu.
Phóng sự được Đài truyền hình Tỉnh Bà Rịa - Vũng Tàu thực hiện"
        maxWidth={660}
      />

      <div className={styles.frame}>
        {playing && hasVideo ? (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube-nocookie.com/embed/${site.youtubeId}?autoplay=1&rel=0${
              site.youtubeStart ? `&start=${site.youtubeStart}` : ""
            }`}
            title="Phóng sự truyền hình về CodeSpace"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src="/images/video-thumbnail.png"
              alt="Lớp học CodeSpace"
              fill
              className={styles.poster}
              sizes="(max-width: 960px) 100vw, 960px"
            />
            <button
              className={styles.overlay}
              onClick={() => hasVideo && setPlaying(true)}
              disabled={!hasVideo}
              aria-label={hasVideo ? "Phát video giới thiệu" : "Video đang được cập nhật"}
            >
              <span className={styles.playBtn} aria-hidden>
                <svg width="30" height="34" viewBox="0 0 30 34" fill="#fff">
                  <path d="M28 15.27a2 2 0 0 1 0 3.46L3 33.2A2 2 0 0 1 0 31.46V2.54A2 2 0 0 1 3 .8l25 14.47Z" />
                </svg>
              </span>
              {!hasVideo && <span className={styles.note}>🎬 Video đang được cập nhật</span>}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
