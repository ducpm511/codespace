// components/StudentReportDetail/StudentReportDetailMain.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";

export default function StudentReportDetailMain() {
  const router = useRouter();
  const { accessToken } = router.query;

  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!accessToken) return;

    const fetchReport = async () => {
      try {
        const res = await fetch(
          `https://codespace-backend-l0xg.onrender.com/student-reports/public/${accessToken}`
        );
        if (!res.ok) throw new Error("Không tìm thấy báo cáo");
        const data = await res.json();
        setReport(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchReport();
  }, [accessToken]);

  if (error) return <div className="container mt-4 text-danger">{error}</div>;
  if (!report) return <div className="container mt-4">Đang tải báo cáo...</div>;

  return (
    <main>
      <Breadcrumb
        breadcrumbTitle="BÁO CÁO HỌC TẬP"
        breadcrumbSubTitle={report.student.fullName}
      />
      <div className="container mt-5 mb-5">
        <h2 className="mb-3 text-primary">
          <strong>Học viên:</strong> {report.student.fullName}
        </h2>

        <p>
          <strong>Khóa học:</strong> {report.class.className}
        </p>
        <p>
          <strong>Thời gian học:</strong>{" "}
          {new Date(report.class.startDate).toLocaleDateString()} -{" "}
          {new Date(report.createdAt).toLocaleDateString()}
        </p>
        {/* <p>
          <strong>Số buổi học:</strong> {report.class.totalSessions} buổi
        </p> */}

        <hr />

        <h2>BÁO CÁO CHI TIẾT</h2>

        <h3 className="mt-3">1. Kết quả kiểm tra lý thuyết:</h3>
        <ul>
          {report.files
            .filter((f) => f.testType === "midterm" || f.testType === "final")
            .map((f) => (
              <li key={f.id}>
                <strong>
                  {f.testType === "midterm" ? "Giữa kỳ" : "Cuối kỳ"}:
                </strong>{" "}
                {f.score} / 100 –{" "}
                <a
                  href={
                    f.fileUrl +
                    "?fl_attachment=" +
                    encodeURIComponent(f.fileName + ".pdf")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tải xuống báo cáo
                </a>
              </li>
            ))}
        </ul>

        <h3 className="mt-4">2. Các dự án tiêu biểu</h3>
        <div className="row">
          {report.links
            .filter((link) => link.type === "SCRATCH_EMBED")
            .map((link) => (
              <div key={link.id} className="col-md-6 mb-4">
                <div className="p-3 shadow-sm border rounded h-100">
                  <h6>Dự án: {link.projectName || "Không tên"}</h6>
                  <p>{link.description || ""}</p>
                  <div
                    className="d-flex justify-content-center"
                    style={{
                      maxWidth: "100%",
                      overflowX: "auto",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: link.urlOrEmbedCode }}
                      style={{
                        maxWidth: "100%",
                        display: "inline-block",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>

        <h3 className="mt-4">3. Chứng chỉ hoàn thành khóa học</h3>
        {report.files.filter((f) => f.testType === "certificate").length ===
          0 && (
          <p>
            Chứng chỉ hoàn thành khóa học sẽ được cập nhật trong vòng 24 giờ sau
            khi kết thúc khóa học. Hãy quay lại sau nhé!
          </p>
        )}

        <ul>
          {report.files
            .filter((f) => f.testType === "certificate")
            .map((f) => (
              <li key={f.id}>
                <strong>
                  {f.testType === "certificate" ? "Chứng chỉ" : ""}:
                </strong>{" "}
                <a
                  href={
                    f.fileUrl +
                    "?fl_attachment=" +
                    encodeURIComponent(f.fileName + ".pdf")
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tải xuống chứng chỉ
                </a>
              </li>
            ))}
        </ul>
        <h3 className="mt-4">4. Video Thuyết trình Dự án cuối khóa</h3>
        {report.links.filter((l) => l.type === "YOUTUBE").length === 0 && (
          <p>Clip thuyết trình sẽ được đăng tải sớm. Hãy quay lại sau nhé!</p>
        )}

        {report.links
          .filter((l) => l.type === "YOUTUBE")
          .map((link) => {
            const url = link.urlOrEmbedCode;
            const videoIdMatch = url.match(
              /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
            );
            const videoId = videoIdMatch ? videoIdMatch[1] : null;

            return (
              <div key={link.id} className="mb-4 d-flex justify-content-center">
                {videoId ? (
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "720px",
                      aspectRatio: "16 / 9",
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "12px",
                      }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ) : (
                  <p>Không thể nhúng video: {url}</p>
                )}
              </div>
            );
          })}
      </div>
    </main>
  );
}
