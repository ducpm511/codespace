import Script from "next/script";
import { site } from "@/data/site";

/**
 * Google Analytics 4 (gtag.js).
 * Chỉ nạp ở production để không làm nhiễu số liệu khi dev.
 * Measurement ID lấy từ site.ts (tái sử dụng property của site cũ).
 */
export default function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production" || !site.gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${site.gaId}');
        `}
      </Script>
    </>
  );
}
