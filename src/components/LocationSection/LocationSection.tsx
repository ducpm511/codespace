import SectionHeading from "@/components/shared/SectionHeading";
import { site } from "@/data/site";
import styles from "./LocationSection.module.css";

// Bản đồ nhúng OpenStreetMap (miễn phí, không cần API key, cho phép nhúng).
// Google Maps đã bỏ kiểu nhúng keyless; nút "Chỉ đường" vẫn mở Google Maps.
const d = 0.004;
const bbox = [site.lng - d, site.lat - d, site.lng + d, site.lat + d].join(",");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${site.lat},${site.lng}`;

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07Z" />
    </svg>
  );
}

export default function LocationSection() {
  return (
    <section className={styles.section}>
      <SectionHeading
        badge="Ghé thăm CodeSpace"
        badgeColor="#D85F18"
        badgeBg="#FCE9DD"
        title="Vị trí & liên hệ"
        subtitle="Đến trực tiếp để cảm nhận không gian học, hoặc kết nối với CodeSpace qua các kênh dưới đây."
        maxWidth={640}
      />

      <div className={styles.grid}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>CodeSpace</h3>
          <p className={styles.infoLead}>Học viện lập trình &amp; công nghệ cho trẻ 7–16 tuổi.</p>

          <div className={styles.item}>
            <span className={styles.itemIcon}>📍</span>
            <div>
              <div className={styles.itemLabel}>Địa chỉ</div>
              <a
                className={styles.itemValue}
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.address}
              </a>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.itemIcon}>📞</span>
            <div>
              <div className={styles.itemLabel}>Điện thoại</div>
              <a className={styles.itemValue} href={site.phoneHref}>
                {site.phone}
              </a>
              {" · "}
              <a className={styles.itemValue} href={site.mobileHref}>
                {site.mobile}
              </a>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.itemIcon}>✉️</span>
            <div>
              <div className={styles.itemLabel}>Email</div>
              <a className={styles.itemValue} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <a
              className={styles.btnDir}
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🧭 Chỉ đường
            </a>
            <a
              className={styles.btnFb}
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon /> Fanpage Facebook
            </a>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            src={mapSrc}
            title="Bản đồ vị trí CodeSpace"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
