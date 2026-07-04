export type InstructorGroup = "expert" | "teacher" | "operation";

export interface Instructor {
  name: string;
  initial: string;
  role: string;
  /** gradient cho avatar tròn (dùng khi chưa có ảnh) */
  gradient: string;
  /** ảnh chân dung trong /public — nếu có sẽ thay cho avatar chữ cái */
  photo?: string;
  /** các nhóm hiển thị ở trang Về chúng tôi (1 người có thể thuộc nhiều nhóm) */
  groups: InstructorGroup[];
  /** phần giới thiệu — hiển thị ở nhóm "expert" (chuyên gia) */
  bio?: string;
  /** skill tag: nhãn + màu chữ + nền tint (hiển thị ở nhóm "teacher" & trang chủ) */
  skills: { label: string; color: string; bg: string }[];
}

export const instructors: Instructor[] = [
  {
    name: "Hoàng Ngọc Huyền",
    initial: "H",
    role: "Đồng sáng lập - CEO - Giảng viên",
    gradient: "linear-gradient(135deg,#7C5CFC,#A689FF)",
    photo: "/images/instructors/co-huyen.jpg",
    groups: ["expert", "teacher"],
    bio: "Hơn 10 năm kinh nghiệm trong lĩnh vực công nghệ thông tin và quản trị nhân sự ngành công nghệ. Là đồng sáng lập kiêm CEO của CodeSpace, cô trực tiếp nghiên cứu và xây dựng khung chương trình đào tạo, đồng thời định hình triết lý giáo dục lấy trẻ làm trung tâm. Bề dày làm việc cùng nhiều đội ngũ kỹ thuật mang đến cho cô góc nhìn thực tế và sâu sắc về những kỹ năng công nghệ mà thế hệ trẻ thực sự cần cho tương lai.",
    skills: [
      { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
      { label: "Robotics", color: "#D85F18", bg: "#FCE9DD" },
      { label: "AI", color: "#5B3FD4", bg: "#EFEAFF" },
    ],
  },
  {
    name: "Phạm Minh Đức",
    initial: "Đ",
    role: "Đồng sáng lập - CTO - Giảng viên",
    gradient: "linear-gradient(135deg,#2B5FE3,#5B86F0)",
    photo: "/images/instructors/thay-duc.jpg",
    groups: ["expert", "teacher"],
    bio: "Hơn 12 năm kinh nghiệm lập trình và phát triển phần mềm, từng tham gia nhiều dự án công nghệ quy mô lớn. Là đồng sáng lập kiêm CTO của CodeSpace, anh trực tiếp thiết kế lộ trình Python, Robotics và liên tục cập nhật chương trình theo các công nghệ mới nhất. Nền tảng kiến thức vững chắc cùng tư duy kỹ thuật thực chiến giúp anh biến những khái niệm lập trình phức tạp thành bài học dễ hiểu, cuốn hút với trẻ.",
    skills: [
      { label: "Python", color: "#2B5FE3", bg: "#EAF0FF" },
      { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
      { label: "Robotics", color: "#D85F18", bg: "#FCE9DD" },
    ],
  },
  {
    name: "Phạm Hữu Hồng Ân",
    initial: "Â",
    role: "R&D - Giảng viên",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/an-gv.png",
    groups: ["teacher"],
    skills: [
      { label: "Python", color: "#2B5FE3", bg: "#EAF0FF" },
      { label: "Robotics", color: "#D85F18", bg: "#FCE9DD" },
      { label: "STEM", color: "#B8860B", bg: "#FFF3DA" },
    ],
  },
  {
    name: "Nguyễn Huỳnh Nhi",
    initial: "N",
    role: "Giảng viên",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/nhi-gv.jpg",
    groups: ["teacher"],
    skills: [
      { label: "Robotics", color: "#D85F18", bg: "#FCE9DD" },
      { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
    ],
  },
  {
    name: "Nguyễn Trọng Nguyễn",
    initial: "N",
    role: "Giảng viên",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/nguyen-gv.jpg",
    groups: ["teacher"],
    skills: [
      { label: "Robotics", color: "#D85F18", bg: "#FCE9DD" },
      { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
    ],
  },
  {
    name: "Nguyễn Tam Duy",
    initial: "D",
    role: "Giảng viên",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/duy-gv.jpg",
    groups: ["teacher"],
    skills: [
      { label: "Python", color: "#2B5FE3", bg: "#EAF0FF" },
      { label: "Robotics", color: "#D85F18", bg: "#FCE9DD" },
      { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
    ],
  },
    {
    name: "Nguyễn Hạnh Duyên",
    initial: "D",
    role: "Giảng viên",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/duyen-gv.jpg",
    groups: ["teacher"],
    skills: [
      { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
    ],
  },
  {
    name: "Bùi Hương Thảo",
    initial: "T",
    role: "Chuyên viên Vận hành - Quản lý học vụ",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/thao-vanhanh.jpg",
    groups: ["operation"],
    skills: [],
  },
  {
    name: "Bùi Khánh Lâm",
    initial: "L",
    role: "Tư vấn tuyển sinh",
    gradient: "linear-gradient(135deg,#FF7A2F,#FFA45C)",
    photo: "/images/instructors/lam-vanhanh.jpg",
    groups: ["operation"],
    skills: [],
  },
];
