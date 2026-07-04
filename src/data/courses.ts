export interface Course {
  slug: string;
  name: string;
  /** tiêu đề dùng ở card preview trang chủ */
  previewTitle: string;
  subtitle: string;
  icon: string;
  /** màu chủ đạo (icon box, accent) */
  color: string;
  /** màu chữ accent đậm hơn (dùng trên nền tint) */
  accent: string;
  /** nền tint nhạt cho badge / header card */
  tint: string;
  /** màu subtitle trong header card khóa học */
  subtitleColor: string;
  /** màu dấu ✓ trong checklist */
  checkColor: string;
  ageRange: string;
  duration: string;
  level: string;
  /** mô tả ngắn cho card preview ở trang chủ */
  previewDesc: string;
  /** "Bé sẽ học gì?" — 4 mục cho trang khóa học */
  learnings: string[];
  outcome: string;
}

export const courses: Course[] = [
  {
    slug: "scratch-co-ban",
    name: "Scratch cơ bản",
    previewTitle: "Scratch cơ bản",
    subtitle: "Lập trình kéo thả",
    icon: "🧩",
    color: "#1FB573",
    accent: "#1FB573",
    tint: "#E7F7EF",
    subtitleColor: "#3E9B72",
    checkColor: "#1FB573",
    ageRange: "7–9 tuổi",
    duration: "3 tháng",
    level: "Cơ bản",
    previewDesc:
      "Làm quen tư duy lập trình qua game & hoạt hình bằng các khối lệnh trực quan.",
    learnings: [
      "Tư duy thuật toán & logic nền tảng",
      "Tạo game & hoạt hình tương tác",
      "Kể chuyện bằng nhân vật & sự kiện",
      "Trình bày sản phẩm tự tin",
    ],
    outcome: "2–3 game tự làm",
  },
  {
    slug: "scratch-nang-cao",
    name: "Scratch nâng cao",
    previewTitle: "Scratch nâng cao",
    subtitle: "Sáng tạo game & dự án",
    icon: "🎮",
    color: "#FFC53D",
    accent: "#B8860B",
    tint: "#FFF3DA",
    subtitleColor: "#B8860B",
    checkColor: "#E0A800",
    ageRange: "9–11 tuổi",
    duration: "3 tháng",
    level: "Nâng cao",
    previewDesc:
      "Nâng tầm kỹ năng Scratch: game nhiều màn, hiệu ứng và logic phức tạp hơn.",
    learnings: [
      "Biến, danh sách & bản sao (clone) nâng cao",
      "Thiết kế game nhiều màn chơi",
      "Vật lý & xử lý va chạm trong game",
      "Tối ưu & gỡ lỗi dự án lớn",
    ],
    outcome: "game hoàn chỉnh nhiều màn",
  },
  {
    slug: "python-co-ban",
    name: "Python cơ bản",
    previewTitle: "Python cơ bản",
    subtitle: "Bước vào code thật",
    icon: "🐍",
    color: "#2B5FE3",
    accent: "#2B5FE3",
    tint: "#EAF0FF",
    subtitleColor: "#2B5FE3",
    checkColor: "#2B5FE3",
    ageRange: "10–13 tuổi",
    duration: "4 tháng",
    level: "Cơ bản",
    previewDesc:
      "Chuyển từ kéo thả sang viết code Python thật, làm game và ứng dụng đầu tiên.",
    learnings: [
      "Cú pháp Python & tư duy code thật",
      "Biến, vòng lặp & hàm",
      "Làm game với Pygame",
      "Xây chương trình nhỏ giải quyết vấn đề",
    ],
    outcome: "game & ứng dụng Python đầu tay",
  },
  {
    slug: "python-nang-cao",
    name: "Python nâng cao",
    previewTitle: "Python nâng cao",
    subtitle: "Dữ liệu & thuật toán",
    icon: "📊",
    color: "#7C5CFC",
    accent: "#5B3FD4",
    tint: "#EFEAFF",
    subtitleColor: "#5B3FD4",
    checkColor: "#7C5CFC",
    ageRange: "12–16 tuổi",
    duration: "6 tháng",
    level: "Nâng cao",
    previewDesc:
      "Đào sâu Python: cấu trúc dữ liệu, thuật toán và xử lý dữ liệu thực tế.",
    learnings: [
      "Cấu trúc dữ liệu & thuật toán",
      "Lập trình hướng đối tượng (OOP)",
      "Xử lý & trực quan hóa dữ liệu",
      "Xây dự án lớn theo nhóm",
    ],
    outcome: "dự án Python chuyên sâu",
  },
  {
    slug: "web-python",
    name: "Lập trình web với Python",
    previewTitle: "Lập trình web với Python",
    subtitle: "Full-stack với Python",
    icon: "🌐",
    color: "#17B0C4",
    accent: "#0F8FA0",
    tint: "#E2F6F8",
    subtitleColor: "#0F8FA0",
    checkColor: "#0F8FA0",
    ageRange: "13–16 tuổi",
    duration: "6 tháng",
    level: "Dự án",
    previewDesc:
      "Xây website động với Python (Flask/Django), từ giao diện đến cơ sở dữ liệu.",
    learnings: [
      "HTML, CSS & thiết kế giao diện web",
      "Backend với Flask / Django",
      "Làm việc với cơ sở dữ liệu",
      "Triển khai website lên internet",
    ],
    outcome: "website hoàn chỉnh chạy thật",
  },
  {
    slug: "vex-robotics",
    name: "VEX Robotics",
    previewTitle: "VEX Robotics",
    subtitle: "Lắp ráp & lập trình robot",
    icon: "🤖",
    color: "#FF7A2F",
    accent: "#D85F18",
    tint: "#FCE9DD",
    subtitleColor: "#D85F18",
    checkColor: "#FF7A2F",
    ageRange: "8–14 tuổi",
    duration: "6 tháng",
    level: "Thi đấu",
    previewDesc:
      "Tự tay lắp ráp và lập trình robot VEX hoàn thành thử thách, sẵn sàng thi đấu.",
    learnings: [
      "Cơ khí & nguyên lý truyền động",
      "Lắp robot từ bộ VEX chính hãng",
      "Lập trình cảm biến & tự động hóa",
      "Chiến thuật & tinh thần thi đấu",
    ],
    outcome: "robot sẵn sàng thi đấu",
  },
  {
    slug: "workshop-steam",
    name: "Workshop STEAM",
    previewTitle: "Workshop STEAM",
    subtitle: "Khoa học · Nghệ thuật · Sáng tạo",
    icon: "🎨",
    color: "#EC4899",
    accent: "#DB2777",
    tint: "#FCE7F1",
    subtitleColor: "#DB2777",
    checkColor: "#EC4899",
    ageRange: "7–12 tuổi",
    duration: "Theo buổi",
    level: "Trải nghiệm",
    previewDesc:
      "Các buổi workshop STEAM theo chủ đề: khoa học, kỹ thuật, nghệ thuật và sáng tạo.",
    learnings: [
      "Thí nghiệm khoa học vui nhộn",
      "Kỹ thuật & thiết kế mô hình",
      "Kết hợp nghệ thuật & công nghệ",
      "Làm việc nhóm & thuyết trình",
    ],
    outcome: "sản phẩm STEAM sáng tạo",
  },
];
