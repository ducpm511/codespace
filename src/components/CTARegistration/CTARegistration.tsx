"use client";

import { useState } from "react";
import Image from "next/image";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { sendContactForm } from "@/lib/emailjs";
import styles from "./CTARegistration.module.css";

type Status = "idle" | "sending" | "ok" | "error";

const courseNames = courses.map((c) => c.name);

export default function CTARegistration() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot: bot điền field ẩn => bỏ qua, giả vờ thành công
    if (data.get("company")) {
      setStatus("ok");
      form.reset();
      return;
    }

    setStatus("sending");
    setErrMsg("");
    try {
      await sendContactForm({
        parentName: String(data.get("parentName") ?? ""),
        phone: String(data.get("phone") ?? ""),
        childAge: String(data.get("childAge") ?? ""),
        course: String(data.get("course") ?? ""),
      });
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrMsg(
        err instanceof Error && err.message === "EMAILJS_NOT_CONFIGURED"
          ? "Form chưa được cấu hình. Vui lòng gọi hotline để được hỗ trợ ngay."
          : "Có lỗi xảy ra khi gửi. Vui lòng thử lại hoặc gọi hotline."
      );
    }
  }

  return (
    <section id="dangky" className={styles.section}>
      <Image
        src="/images/mascot-fly.png"
        alt=""
        width={128}
        height={128}
        className={styles.mascot}
      />
      <div className={styles.band}>
        <div className={styles.blobBlue} aria-hidden />
        <div className={styles.blobOrange} aria-hidden />

        <div className={styles.info}>
          <span className={styles.badge}>Đăng ký học thử miễn phí</span>
          <h2 className={styles.title}>
            Cho con trải nghiệm
            <br />
            một buổi học thật
          </h2>
          <p className={styles.lead}>
            Để lại thông tin, đội ngũ CodeSpace sẽ tư vấn lộ trình phù hợp và xếp lịch học
            thử miễn phí cho bé.
          </p>
          <div className={styles.contacts}>
            <a href={site.phoneHref} className={styles.contact}>
              📞 <strong>{site.phone}</strong>
            </a>
            <a href={`mailto:${site.email}`} className={styles.contact}>
              ✉️ <strong>{site.email}</strong>
            </a>
          </div>
        </div>

        <div className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
            <div>
              <label className={styles.label} htmlFor="parentName">
                Tên phụ huynh
              </label>
              <input
                id="parentName"
                name="parentName"
                type="text"
                required
                placeholder="Nguyễn Văn A"
                className={styles.input}
              />
            </div>
            <div className={styles.row2}>
              <div>
                <label className={styles.label} htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9\s+]{8,}"
                  placeholder="09xx xxx xxx"
                  className={styles.input}
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="childAge">
                  Tuổi của bé
                </label>
                <input
                  id="childAge"
                  name="childAge"
                  type="number"
                  required
                  min={7}
                  max={16}
                  placeholder="7 – 16"
                  className={styles.input}
                />
              </div>
            </div>
            <div>
              <label className={styles.label} htmlFor="course">
                Khóa học quan tâm
              </label>
              <select id="course" name="course" className={styles.select} defaultValue={courseNames[0]}>
                {courseNames.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* honeypot ẩn — bot sẽ điền, người dùng thật thì không */}
            <div className={styles.honeypot} aria-hidden>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {status === "ok" && (
              <div className={`${styles.toast} ${styles.toastOk}`}>
                ✅ Đã gửi! CodeSpace sẽ liên hệ với bạn sớm nhất.
              </div>
            )}
            {status === "error" && (
              <div className={`${styles.toast} ${styles.toastErr}`}>⚠️ {errMsg}</div>
            )}

            <button type="submit" className={styles.submit} disabled={status === "sending"}>
              {status === "sending" ? "Đang gửi…" : "Nhận tư vấn & lịch học thử"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
