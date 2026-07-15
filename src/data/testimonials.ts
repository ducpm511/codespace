export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  /** ảnh avatar trong /images, hoặc null nếu dùng chữ cái */
  avatar: string | null;
  /** chữ cái + màu nền khi không có ảnh */
  initial?: string;
  initialBg?: string;
  /** card tối (nền navy) đặt ở giữa */
  dark?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Con từ chỗ chỉ thích chơi game giờ tự làm được game của riêng mình. Bé hào hứng kể về buổi học mỗi tuần, điều mà trước đây hiếm khi thấy.",
    name: "Chị Thu Hà",
    meta: "Phụ huynh bé Khoa · 9 tuổi",
    avatar: "/images/avatar-tablet.jpg",
  },
  {
    quote:
      "Giáo viên rất tận tâm, báo cáo tiến độ rõ ràng sau mỗi buổi. Con học Python và đã tự viết được chương trình nhỏ giúp mẹ tính chi tiêu.",
    name: "Anh Phương",
    meta: "Phụ huynh bé Gia Huy · 13 tuổi",
    avatar: "/images/avatar-smile.png",
    initial: "P",
    initialBg: "#2B5FE3",
    dark: true,
  },
  {
    quote:
      "Bé nhà mình mê robot lắm. Lớp Robotics nhỏ, thầy kèm sát nên con tiến bộ nhanh và còn được đi thi đấu, tự tin hẳn lên.",
    name: "Chị Mai Lan",
    meta: "Phụ huynh bé Triết · 9 tuổi",
    avatar: "/images/avatar-celebrate.jpg",
  },
];
