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
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const baloo = Baloo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
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
    // Ảnh (og:image) tự sinh từ src/app/opengraph-image.tsx.
    type: "website",
    locale: "vi_VN",
    url: site.url,
    siteName: site.name,
    title: `CodeSpace — Học lập trình, robotics & AI cho trẻ 7–16 tuổi`,
    description: site.description,
  },
  twitter: {
    // Ảnh (twitter:image) tự sinh từ src/app/twitter-image.tsx.
    card: "summary_large_image",
    title: `Khóa học lập trình cho trẻ em 7–16 tuổi | ${site.name}`,
    description: site.description,
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
