import emailjs from "@emailjs/browser";

/**
 * Credentials lấy từ website production hiện tại (repo ducpm511/codespace).
 * EmailJS Public Key vốn được thiết kế để lộ ở client, nên dùng làm mặc định an toàn.
 * Có thể override qua biến môi trường NEXT_PUBLIC_EMAILJS_* nếu cần đổi tài khoản.
 */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_bqf98h2";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_286hzcn";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "RI2UR8GSJxlmoDXOf";

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export interface ContactPayload {
  parentName: string;
  phone: string;
  childAge: string;
  course: string;
}

/**
 * Gửi form đăng ký học thử qua EmailJS.
 * Map sang đúng biến của template hiện có:
 *   {{from_name}} {{from_phone_number}} {{from_email}} {{course}} {{message}}
 */
export async function sendContactForm(payload: ContactPayload): Promise<void> {
  if (!isEmailJsConfigured) {
    throw new Error("EMAILJS_NOT_CONFIGURED");
  }
  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: payload.parentName,
      from_phone_number: payload.phone,
      from_email: "",
      course: payload.course,
      message: payload.childAge ? `Tuổi của bé: ${payload.childAge}` : "",
    },
    { publicKey: PUBLIC_KEY }
  );
}
