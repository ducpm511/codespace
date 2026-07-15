export interface FeaturedProject {
  image: string;
  tags: { label: string; color: string; bg: string }[];
  title: string;
  description: string;
  student: string;
  studentMeta: string;
  initial: string;
}

export interface SideProject {
  image: string;
  tag: { label: string; color: string; bg: string };
  title: string;
  student: string;
}

export const featuredProject: FeaturedProject = {
  image: "/images/project-vex.jpg",
  tags: [
    { label: "VEX Robotics", color: "#D85F18", bg: "#FCE9DD" },
    { label: "Cảm biến", color: "#0F8FA0", bg: "#E2F6F8" },
  ],
  title: "Robot vượt địa hình & nhặt vật",
  description:
    "Một robot tự lắp với hệ truyền động bánh xích, cánh tay nâng và cảm biến màu — lập trình để di chuyển qua sa bàn và phân loại khối.",
  student: "Minh Triết",
  studentMeta: "· 9 tuổi · Lớp Robotics",
  initial: "M",
};

export const sideProjects: SideProject[] = [
  {
    image: "/images/project-submarine.png",
    tag: { label: "Scratch", color: "#1FB573", bg: "#E7F7EF" },
    title: 'Game "Submarine Squad"',
    student: "Minh Sơn · 9 tuổi",
  },
  {
    image: "/images/project-expense.png",
    tag: { label: "Python", color: "#2B5FE3", bg: "#EAF0FF" },
    title: "App Quản lý chi tiêu cá nhân",
    student: "Hải Ngân · 14 tuổi",
  },
  {
    image: "/images/project-moodscan.png",
    tag: { label: "Web + AI", color: "#5B3FD4", bg: "#EFEAFF" },
    title: "MoodScan AI – đọc cảm xúc",
    student: "Thành Nhân · 15 tuổi",
  },
];
