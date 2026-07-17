import type { Metadata } from "next";
import { Be_Vietnam_Pro, Baloo_2 } from "next/font/google";
import { site } from "@/data/site";
import Header from "@/components/Header/Header";
import JsonLd from "@/components/JsonLd/JsonLd";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import { organizationSchema, websiteSchema } from "@/lib/structuredData";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
  variable: "--font-baloo",
  // optional: tiêu đề (LCP) vẽ ngay bằng font hệ thống nếu Baloo chưa kịp tải
  // trong ~100ms → không chờ font trên mạng chậm → LCP mobile giảm mạnh.
  display: "optional",
});

/**
 * URL gốc cho metadata (dùng để biến og:image, canonical… thành URL tuyệt đối).
 * - Ưu tiên NEXT_PUBLIC_SITE_URL nếu được đặt thủ công.
 * - Bản preview trên Vercel dùng chính domain preview để OG image không trỏ
 *   nhầm về domain production (có thể chưa live) → tránh thumbnail bị 404.
 * - Còn lại dùng domain chính thức trong site.ts.
 */
function resolveMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL(site.url);
}

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: {
    // Title mặc định dẫn bằng từ khóa đầu để tối ưu cho site mới.
    default: `Khóa học lập trình cho trẻ em 7–16 tuổi | ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: site.googleSiteVerification,
  },
  authors: [{ name: site.name }],
  category: "education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    // Thumbnail thương hiệu tĩnh (public/og-image.png, 1200×630).
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.name,
    title: `CodeSpace — Học lập trình, robotics & AI cho trẻ 7–16 tuổi`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeSpace — Học lập trình, robotics & AI cho trẻ 7–16 tuổi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Khóa học lập trình cho trẻ em 7–16 tuổi | ${site.name}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  // Favicon dùng file src/app/favicon.ico (Next.js tự nhận theo quy ước).
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${baloo.variable}`}>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
