"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./StudentReport.module.css";

interface ReportFile {
  id: string | number;
  testType: "midterm" | "final" | "certificate" | string;
  score?: number;
  fileUrl: string;
  fileName: string;
}
interface ReportLink {
  id: string | number;
  type: "SCRATCH_EMBED" | "YOUTUBE" | string;
  urlOrEmbedCode: string;
  projectName?: string;
  description?: string;
}
interface Report {
  student: { fullName: string };
  class: { className: string; startDate: string; totalSessions?: number };
  files: ReportFile[];
  links: ReportLink[];
}

const API = "https://codespace-backend-l0xg.onrender.com/student-reports/public";

function downloadHref(f: ReportFile) {
  return `${f.fileUrl}?fl_attachment=${encodeURIComponent(f.fileName + ".pdf")}`;
}

function youtubeId(url: string): string | null {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return m ? m[1] : null;
}

export default function StudentReportClient() {
  const params = useParams<{ accessToken: string }>();
  const accessToken = params?.accessToken;

  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) return;
    let active = true;
    (async () => {
      try {
        const res = await fetch(`${API}/${accessToken}`);
        if (!res.ok) throw new Error("Không tìm thấy báo cáo");
        const data = (await res.json()) as Report;
        if (active) setReport(data);
      } catch (err) {
        const msg =
          err instanceof Error && err.message === "Không tìm thấy báo cáo"
            ? err.message
            : "Không thể tải báo cáo. Vui lòng kiểm tra kết nối và thử lại.";
        if (active) setError(msg);
      }
    })();
    return () => {
      active = false;
    };
  }, [accessToken]);

  if (error) {
    return (
      <div className={styles.state}>
        <div className={styles.stateError}>⚠️ {error}</div>
        <p>Vui lòng kiểm tra lại đường dẫn hoặc liên hệ CodeSpace để được hỗ trợ.</p>
      </div>
    );
  }

  if (!report) {
    return (
      <div className={styles.state}>
        <div className={styles.spinner} aria-hidden />
        Đang tải báo cáo học tập…
      </div>
    );
  }

  const theoryFiles = report.files.filter(
    (f) => f.testType === "midterm" || f.testType === "final"
  );
  const certificates = report.files.filter((f) => f.testType === "certificate");
  const scratchProjects = report.links.filter((l) => l.type === "SCRATCH_EMBED");
  const videos = report.links.filter((l) => l.type === "YOUTUBE");

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden />
        <span className={styles.badge}>Báo cáo học tập</span>
        <h1 className={styles.studentName}>{report.student.fullName}</h1>
        <div className={styles.meta}>
          <span>
            <strong>Khóa học:</strong> {report.class.className}
          </span>
          <span>
            <strong>Ngày bắt đầu:</strong>{" "}
            {new Date(report.class.startDate).toLocaleDateString("vi-VN")}
          </span>
        </div>
      </div>

      {/* 1. Kết quả kiểm tra lý thuyết */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>1</span>
          <h2 className={styles.sectionTitle}>Kết quả kiểm tra lý thuyết</h2>
        </div>
        {theoryFiles.length === 0 ? (
          <div className={styles.empty}>Chưa có kết quả kiểm tra. Hãy quay lại sau nhé!</div>
        ) : (
          <div className={styles.scoreList}>
            {theoryFiles.map((f) => (
              <div key={f.id} className={styles.scoreCard}>
                <div>
                  <div className={styles.scoreLabel}>
                    {f.testType === "midterm" ? "Kiểm tra giữa kỳ" : "Kiểm tra cuối kỳ"}
                  </div>
                  <div className={styles.scoreValue}>
                    {f.score ?? "—"} <span>/ 100</span>
                  </div>
                </div>
                <a className={styles.dl} href={downloadHref(f)} target="_blank" rel="noopener noreferrer">
                  ⬇️ Tải bài kiểm tra
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 2. Dự án tiêu biểu */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>2</span>
          <h2 className={styles.sectionTitle}>Các dự án tiêu biểu</h2>
        </div>
        {scratchProjects.length === 0 ? (
          <div className={styles.empty}>Các dự án của bé sẽ được cập nhật sớm.</div>
        ) : (
          <div className={styles.projectGrid}>
            {scratchProjects.map((link) => {
              const embed = link.urlOrEmbedCode.replace("<iframe", '<iframe loading="lazy"');
              return (
                <div key={link.id} className={styles.projectCard}>
                  <h3 className={styles.projectName}>{link.projectName || "Dự án không tên"}</h3>
                  {link.description && <p className={styles.projectDesc}>{link.description}</p>}
                  <div className={styles.embed} dangerouslySetInnerHTML={{ __html: embed }} />
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 3. Chứng chỉ */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>3</span>
          <h2 className={styles.sectionTitle}>Chứng chỉ hoàn thành khóa học</h2>
        </div>
        {certificates.length === 0 ? (
          <div className={styles.empty}>
            Chứng chỉ sẽ được cập nhật trong vòng 24 giờ sau khi kết thúc khóa học. Hãy quay lại
            sau nhé!
          </div>
        ) : (
          <div className={styles.scoreList}>
            {certificates.map((f) => (
              <div key={f.id} className={styles.scoreCard}>
                <div className={styles.scoreLabel}>🏆 Chứng chỉ hoàn thành</div>
                <a className={styles.dl} href={downloadHref(f)} target="_blank" rel="noopener noreferrer">
                  ⬇️ Tải chứng chỉ
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Video thuyết trình */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionNum}>4</span>
          <h2 className={styles.sectionTitle}>Video thuyết trình dự án cuối khóa</h2>
        </div>
        {videos.length === 0 ? (
          <div className={styles.empty}>Clip thuyết trình sẽ được đăng tải sớm. Hãy quay lại sau nhé!</div>
        ) : (
          videos.map((link) => {
            const id = youtubeId(link.urlOrEmbedCode);
            return id ? (
              <div key={link.id} className={styles.videoWrap}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={link.projectName || "Video thuyết trình"}
                  allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : (
              <div key={link.id} className={styles.empty}>
                Không thể nhúng video: {link.urlOrEmbedCode}
              </div>
            );
          })
        )}
      </section>
    </div>
  );
}
