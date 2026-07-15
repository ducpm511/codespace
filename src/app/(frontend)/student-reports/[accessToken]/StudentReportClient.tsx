"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useParams } from "next/navigation";
import { getYoutubeEmbedUrl, getScratchEmbedUrl, isHttpUrl } from "@/lib/reportEmbeds";
import PythonRunner from "./PythonRunner";
import styles from "./StudentReport.module.css";

type TestType = "midterm" | "final" | "certificate";
type LinkType = "PROJECT" | "YOUTUBE" | "SCRATCH_EMBED" | "PYTHON" | "WEB_EMBED";

interface ReportFile {
  id: number | string;
  fileName: string;
  fileUrl: string;
  testType?: TestType;
  score?: number | string | null;
}
interface ReportLink {
  id: number | string;
  type: LinkType;
  urlOrEmbedCode: string;
  projectName?: string | null;
  description?: string | null;
}
interface Report {
  title?: string;
  student?: { fullName?: string };
  class?: { className?: string; startDate?: string };
  files?: ReportFile[];
  links?: ReportLink[];
  teacherComment?: string;
  teacherName?: string;
}

const API = "https://codespace-backend-l0xg.onrender.com/student-reports/public";
const TEST_LABELS: Record<string, string> = {
  midterm: "Bài kiểm tra giữa kỳ",
  final: "Bài kiểm tra cuối kỳ",
  certificate: "Chứng nhận hoàn thành",
};

function formatScore(score: ReportFile["score"]): string | null {
  if (score === null || score === undefined || score === "") return null;
  const n = Number(score);
  return Number.isNaN(n) ? String(score) : String(Math.round(n * 100) / 100);
}

function Section({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <span className={styles.sectionIcon} aria-hidden>{icon}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

/** Xem PDF trực tiếp (inline) + điểm + link mở/tải. */
function PdfCard({ file }: { file: ReportFile }) {
  const score = formatScore(file.score);
  return (
    <div className={styles.pdfCard}>
      <div className={styles.pdfBar}>
        <span className={styles.pdfLabel}>
          {TEST_LABELS[file.testType ?? ""] ?? file.fileName}
        </span>
        <div className={styles.pdfActions}>
          {score !== null && <span className={styles.scoreBadge}>Điểm: {score}</span>}
          <a className={styles.pdfLink} href={file.fileUrl} target="_blank" rel="noopener noreferrer">
            ↗ Mở
          </a>
          <a
            className={styles.pdfLink}
            href={`${file.fileUrl}?fl_attachment=${encodeURIComponent(file.fileName)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            ⬇ Tải
          </a>
        </div>
      </div>
      <iframe src={file.fileUrl} title={file.fileName} className={styles.pdfFrame} />
    </div>
  );
}

/** Khung nhúng 16:9 có sandbox (Scratch / Web / YouTube). */
function EmbedFrame({ src, srcDoc, title }: { src?: string; srcDoc?: string; title: string }) {
  return (
    <div className={styles.embedFrame}>
      <iframe
        src={src}
        srcDoc={srcDoc}
        title={title}
        loading="lazy"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
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

  const files = report.files ?? [];
  const links = report.links ?? [];
  const tests = files.filter((f) => f.testType === "midterm" || f.testType === "final");
  const certificates = files.filter((f) => f.testType === "certificate");
  const youtube = links.filter((l) => l.type === "YOUTUBE");
  const scratch = links.filter((l) => l.type === "SCRATCH_EMBED");
  const python = links.filter((l) => l.type === "PYTHON");
  const web = links.filter((l) => l.type === "WEB_EMBED");

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden />
        <span className={styles.badge}>Báo cáo học tập</span>
        <h1 className={styles.studentName}>{report.student?.fullName ?? report.title ?? "Học viên"}</h1>
        <div className={styles.meta}>
          {report.class?.className && (
            <span>
              <strong>Khóa học:</strong> {report.class.className}
            </span>
          )}
          {report.class?.startDate && (
            <span>
              <strong>Ngày bắt đầu:</strong>{" "}
              {new Date(report.class.startDate).toLocaleDateString("vi-VN")}
            </span>
          )}
        </div>
      </div>

      {report.teacherComment && (
        <Section
          icon="💬"
          title={`Nhận xét của giáo viên${report.teacherName ? ` (${report.teacherName})` : ""}`}
        >
          <div className={styles.comment}>{report.teacherComment}</div>
        </Section>
      )}

      {tests.length > 0 && (
        <Section icon="📄" title="Kết quả bài kiểm tra">
          <div className={styles.stack}>
            {tests.map((f) => (
              <PdfCard key={f.id} file={f} />
            ))}
          </div>
        </Section>
      )}

      <Section icon="🏆" title="Chứng nhận hoàn thành khóa học">
        {certificates.length === 0 ? (
          <div className={styles.empty}>
            Chứng chỉ sẽ được cập nhật trong vòng 24 giờ sau khi kết thúc khóa học. Hãy quay lại
            sau nhé!
          </div>
        ) : (
          <div className={styles.stack}>
            {certificates.map((f) => (
              <PdfCard key={f.id} file={f} />
            ))}
          </div>
        )}
      </Section>

      {scratch.length > 0 && (
        <Section icon="🧩" title="Dự án Scratch">
          <div className={styles.stack}>
            {scratch.map((l) => {
              const src = getScratchEmbedUrl(l.urlOrEmbedCode);
              return (
                <div key={l.id} className={styles.projectItem}>
                  {l.projectName && <p className={styles.projectName}>{l.projectName}</p>}
                  {src ? (
                    <EmbedFrame src={src} title={l.projectName ?? `scratch-${l.id}`} />
                  ) : (
                    <p className={styles.projectDesc}>{l.urlOrEmbedCode}</p>
                  )}
                  {l.description && <p className={styles.projectDesc}>{l.description}</p>}
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {python.length > 0 && (
        <Section icon="🐍" title="Chương trình Python">
          <div className={styles.stack}>
            {python.map((l) => (
              <div key={l.id} className={styles.projectItem}>
                {l.projectName && <p className={styles.projectName}>{l.projectName}</p>}
                {l.description && <p className={styles.projectDesc}>{l.description}</p>}
                <PythonRunner code={l.urlOrEmbedCode} />
              </div>
            ))}
          </div>
        </Section>
      )}

      {web.length > 0 && (
        <Section icon="🌐" title="Dự án lập trình web">
          <div className={styles.stack}>
            {web.map((l) => {
              const url = isHttpUrl(l.urlOrEmbedCode);
              return (
                <div key={l.id} className={styles.projectItem}>
                  {l.projectName && <p className={styles.projectName}>{l.projectName}</p>}
                  <EmbedFrame
                    title={l.projectName ?? `web-${l.id}`}
                    src={url ? l.urlOrEmbedCode : undefined}
                    srcDoc={url ? undefined : l.urlOrEmbedCode}
                  />
                  {url && (
                    <a className={styles.openLink} href={l.urlOrEmbedCode} target="_blank" rel="noopener noreferrer">
                      ↗ Mở trang dự án
                    </a>
                  )}
                  {l.description && <p className={styles.projectDesc}>{l.description}</p>}
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {youtube.length > 0 && (
        <Section icon="🎬" title="Video thuyết trình dự án cuối khóa">
          <div className={styles.stack}>
            {youtube.map((l) => {
              const src = getYoutubeEmbedUrl(l.urlOrEmbedCode);
              return src ? (
                <div key={l.id} className={styles.projectItem}>
                  {l.projectName && <p className={styles.projectName}>{l.projectName}</p>}
                  <EmbedFrame src={src} title={l.projectName ?? `youtube-${l.id}`} />
                </div>
              ) : (
                <a key={l.id} className={styles.openLink} href={l.urlOrEmbedCode} target="_blank" rel="noopener noreferrer">
                  {l.urlOrEmbedCode}
                </a>
              );
            })}
          </div>
        </Section>
      )}
    </div>
  );
}
