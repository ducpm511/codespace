import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Thumbnail chia sẻ (Open Graph / Twitter) — render thành PNG 1200×630.
 * Áp dụng cho mọi trang (các route con kế thừa nếu không override).
 * Dùng font Be Vietnam Pro tải sẵn để render đúng dấu tiếng Việt.
 */
export const alt =
  "CodeSpace — Học lập trình, robotics & AI cho trẻ 7–16 tuổi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontsDir = join(process.cwd(), "src/assets/fonts");
const imgDir = join(process.cwd(), "public/images");

function dataUri(file: string) {
  return `data:image/png;base64,${readFileSync(join(imgDir, file)).toString(
    "base64"
  )}`;
}

export default async function Image() {
  const black = readFileSync(join(fontsDir, "BeVietnamPro-Black.ttf"));
  const bold = readFileSync(join(fontsDir, "BeVietnamPro-Bold.ttf"));
  const medium = readFileSync(join(fontsDir, "BeVietnamPro-Medium.ttf"));
  const logo = dataUri("logo-white.png");
  const mascot = dataUri("mascot-laptop.png");

  const chip = (label: string, color: string) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 22px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.10)",
        border: `2px solid ${color}`,
        color: "#fff",
        fontSize: 26,
        fontWeight: 700,
      }}
    >
      {label}
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #0E2148 0%, #14295A 55%, #1B3A7A 100%)",
          fontFamily: "BVP",
          overflow: "hidden",
        }}
      >
        {/* Blobs trang trí */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "#2B5FE3",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 460,
            height: 460,
            borderRadius: 999,
            background: "#1FB573",
            opacity: 0.28,
          }}
        />

        {/* Cột trái: nội dung */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "68px 60px",
            width: 780,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} height={62} alt="CodeSpace" style={{ marginBottom: 30 }} />

          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "9px 20px",
              borderRadius: 999,
              background: "rgba(255,197,61,0.18)",
              color: "#FFD666",
              fontSize: 24,
              fontWeight: 500,
              marginBottom: 26,
            }}
          >
            Học viện công nghệ cho trẻ 7–16 tuổi
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#fff",
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: -1,
            }}
          >
            <div style={{ display: "flex" }}>Học lập trình, robotics</div>
            <div style={{ display: "flex" }}>
              &amp; AI bằng cách&nbsp;
              <span style={{ color: "#FFC53D" }}>làm thật</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 14, marginTop: 34 }}>
            {chip("Scratch", "#1FB573")}
            {chip("Python", "#2B5FE3")}
            {chip("VEX Robotics", "#FF7A2F")}
            {chip("STEAM", "#EC4899")}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 40,
              color: "#AEB9D4",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            www.codespace.edu.vn
          </div>
        </div>

        {/* Cột phải: mascot */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mascot} width={300} height={300} alt="Rex mascot" />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "BVP", data: black, weight: 900 },
        { name: "BVP", data: bold, weight: 700 },
        { name: "BVP", data: medium, weight: 500 },
      ],
    }
  );
}
