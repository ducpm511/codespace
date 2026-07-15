import type { Metadata } from "next";
import StudentReportClient from "./StudentReportClient";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Báo cáo học tập",
  description:
    "Xem chi tiết kết quả học tập, dự án và chứng chỉ của học viên tại CodeSpace.",
  robots: { index: false, follow: false },
};

export default function StudentReportPage() {
  return (
    <>
      <StudentReportClient />
      <Footer variant="simple" />
    </>
  );
}
