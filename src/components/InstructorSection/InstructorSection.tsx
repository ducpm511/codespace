import { instructors, type InstructorGroup } from "@/data/instructors";
import SectionHeading from "@/components/shared/SectionHeading";
import InstructorAvatar from "./InstructorAvatar";
import InstructorBio from "./InstructorBio";
import styles from "./InstructorSection.module.css";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  /** hiển thị skill tags (trang chủ, nhóm giáo viên) */
  showTags?: boolean;
  /** hiển thị phần giới thiệu (nhóm chuyên gia) */
  showBio?: boolean;
  /** lọc theo nhóm; bỏ trống = hiện tất cả (trang chủ) */
  group?: InstructorGroup;
}

export default function InstructorSection({
  badge,
  title,
  subtitle,
  showTags = true,
  showBio = false,
  group,
}: Props) {
  const people = group ? instructors.filter((i) => i.groups.includes(group)) : instructors;

  // Không có ai trong nhóm thì ẩn hẳn section
  if (people.length === 0) return null;

  return (
    <section className={styles.section}>
      <SectionHeading
        badge={badge}
        badgeColor="#D85F18"
        badgeBg="#FCE9DD"
        title={title}
        subtitle={subtitle}
        maxWidth={720}
      />

      <div className={styles.grid}>
        {people.map((i) => (
          <div key={i.name} className={styles.card}>
            <InstructorAvatar instructor={i} />
            <div className={styles.name}>{i.name}</div>
            <div className={styles.role}>{i.role}</div>
            {showBio && i.bio && <InstructorBio text={i.bio} />}
            {showTags && i.skills.length > 0 && (
              <div className={styles.tags}>
                {i.skills.map((s) => (
                  <span
                    key={s.label}
                    className={styles.tag}
                    style={{ color: s.color, background: s.bg }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
