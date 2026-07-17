import sharp from "sharp";
import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const dir = "public/images";
const MAX_WIDTH = 1600; // đủ cho retina; cắt ảnh camera 4000px
const SKIP_BELOW = 60_000; // bỏ qua logo/mascot nhỏ (giữ nét & trong suốt)

let totalBefore = 0;
let totalAfter = 0;

for (const file of readdirSync(dir)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const path = join(dir, file);
  const before = statSync(path).size;
  totalBefore += before;

  if (before < SKIP_BELOW) {
    totalAfter += before;
    console.log(`· skip  ${file} (${(before / 1024) | 0}KB nhỏ)`);
    continue;
  }

  const input = readFileSync(path);
  const meta = await sharp(input).metadata();
  let p = sharp(input).rotate(); // tôn trọng EXIF orientation
  if (meta.width && meta.width > MAX_WIDTH) {
    p = p.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  const isPng = /\.png$/i.test(file);
  const out = isPng
    ? await p.png({ compressionLevel: 9, palette: true, quality: 80, effort: 8 }).toBuffer()
    : await p.jpeg({ quality: 80, mozjpeg: true }).toBuffer();

  const finalSize = out.length < before ? out.length : before;
  if (out.length < before) writeFileSync(path, out);
  totalAfter += finalSize;

  console.log(
    `✓ ${file}  ${(before / 1024) | 0}KB → ${(finalSize / 1024) | 0}KB  (${meta.width}×${meta.height})`
  );
}

console.log(
  `\nTỔNG: ${(totalBefore / 1048576).toFixed(1)}MB → ${(totalAfter / 1048576).toFixed(1)}MB`
);
