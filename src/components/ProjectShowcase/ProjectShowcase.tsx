import Image from "next/image";
import { featuredProject, sideProjects } from "@/data/projects";
import styles from "./ProjectShowcase.module.css";

export default function ProjectShowcase() {
  return (
    <section id="duan" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.headLeft}>
          <span className={styles.badge}>Dự án tiêu biểu của học viên</span>
          <h2 className={styles.title}>Sản phẩm thật, do chính các bạn nhỏ tạo ra</h2>
        </div>
        <p className={styles.headNote}>
          Không phải bài tập trên giấy — đây là những gì học viên CodeSpace mang về nhà sau
          khóa học.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.featured}>
          <div className={styles.featuredImg}>
            <Image
              src={featuredProject.image}
              alt={featuredProject.title}
              width={620}
              height={330}
              sizes="(max-width: 900px) 92vw, 620px"
            />
            <span className={styles.featuredTag}>⭐ Dự án nổi bật</span>
          </div>
          <div className={styles.featuredBody}>
            <div className={styles.tagRow}>
              {featuredProject.tags.map((t) => (
                <span
                  key={t.label}
                  className={styles.tag}
                  style={{ color: t.color, background: t.bg }}
                >
                  {t.label}
                </span>
              ))}
            </div>
            <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
            <p className={styles.featuredDesc}>{featuredProject.description}</p>
            <div className={styles.student}>
              <span className={styles.studentAvatar}>{featuredProject.initial}</span>
              <div className={styles.studentName}>
                <strong>{featuredProject.student}</strong>{" "}
                <span>{featuredProject.studentMeta}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.side}>
          {sideProjects.map((p) => (
            <div key={p.title} className={styles.sideCard}>
              <div className={styles.sideThumb}>
                <Image src={p.image} alt={p.title} width={96} height={96} />
              </div>
              <div>
                <span
                  className={styles.sideTag}
                  style={{ color: p.tag.color, background: p.tag.bg }}
                >
                  {p.tag.label}
                </span>
                <h3 className={styles.sideTitle}>{p.title}</h3>
                <p className={styles.sideStudent}>{p.student}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
