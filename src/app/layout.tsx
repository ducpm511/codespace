import type { Metadata } from "next";
import { Be_Vietnam_Pro, Baloo_2 } from "next/font/google";
import { site } from "@/data/site";
import Header from "@/components/Header/Header";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Học viện lập trình & công nghệ cho trẻ 7–16 tuổi`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    title: `${site.name} — Học lập trình, robotics & AI bằng cách làm thật`,
    description: site.description,
    images: ["/images/students-team.jpg"],
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
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
