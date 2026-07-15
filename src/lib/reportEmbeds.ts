/**
 * Chuyển link học viên nhập thành URL nhúng an toàn.
 * Port từ CMS (report-embeds.ts).
 */

/** Lấy thuộc tính src từ đoạn <iframe ...> dán vào. */
export function extractIframeSrc(input: string): string | null {
  const match = input.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

/** Chuẩn hóa mọi dạng URL YouTube (watch/youtu.be/shorts/embed/iframe) → embed nocookie. */
export function getYoutubeEmbedUrl(input: string): string | null {
  const raw = input.trim();
  const candidate = raw.includes("<iframe") ? extractIframeSrc(raw) ?? raw : raw;

  const patterns = [
    /[?&]v=([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ];
  for (const re of patterns) {
    const m = candidate.match(re);
    if (m) return `https://www.youtube-nocookie.com/embed/${m[1]}`;
  }
  if (/^[\w-]{11}$/.test(candidate)) {
    return `https://www.youtube-nocookie.com/embed/${candidate}`;
  }
  return null;
}

/** Chuẩn hóa URL/iframe Scratch → URL embed chính thức (chơi trực tiếp). */
export function getScratchEmbedUrl(input: string): string | null {
  const raw = input.trim();
  const candidate = raw.includes("<iframe") ? extractIframeSrc(raw) ?? raw : raw;

  const m = candidate.match(/scratch\.mit\.edu\/projects\/(\d+)/);
  if (m) return `https://scratch.mit.edu/projects/${m[1]}/embed`;
  return null;
}

/** true nếu giá trị là http(s) URL (khác với HTML/code thô). */
export function isHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}
