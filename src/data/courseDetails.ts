/**
 * Nội dung chi tiết từng khóa học — trích từ tài liệu chương trình chính thức
 * của CodeSpace (bộ slide 6 khóa học chính, 2025).
 * Dùng cho trang chi tiết /khoa-hoc/[slug].
 *
 * Khóa nào không có trong object này (vd workshop-steam) sẽ không có trang
 * chi tiết riêng — card ở trang danh sách chỉ trỏ về /khoa-hoc.
 */

export interface CurriculumBlock {
  title: string;
  items: string[];
}

export interface CourseProject {
  name: string;
  desc: string;
}

export interface CourseDetail {
  /** đoạn mô tả tổng quan (1–2 câu ngắn cho hero) */
  tagline: string;
  /** đoạn giới thiệu đầy đủ */
  intro: string;
  sessions: string; // "48 buổi"
  schedule: string; // "2 buổi/tuần · 90 phút/buổi"
  months: string; // "6 tháng"
  prerequisites: string[];
  tools?: string[];
  knowledge: string[];
  skills: string[];
  assessment: string[];
  curriculum: CurriculumBlock[];
  projects?: CourseProject[];
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const courseDetails: Record<string, CourseDetail> = {
  "scratch-co-ban": {
    tagline:
      "Bước đầu tiên vào thế giới lập trình — biến ý tưởng thành game và hoạt hình bằng các khối lệnh kéo thả.",
    intro:
      "Trong kỷ nguyên số, mục tiêu của giáo dục không chỉ là truyền thụ kiến thức mà là xây dựng năng lực tư duy. Khóa học Lập trình Scratch cơ bản sử dụng Scratch — môi trường lập trình được công nhận trên toàn cầu — như một công cụ học thuật để biến ý tưởng thành sản phẩm số. Thông qua việc sắp xếp và kết hợp các khối lệnh, học sinh tiếp cận và thấu hiểu các nguyên lý cơ bản của khoa học máy tính như thuật toán, biến số và cấu trúc điều kiện. Mục tiêu của chúng tôi là phát triển tư duy phản biện và kỹ năng giải quyết vấn đề một cách có hệ thống — nền tảng cho các môn STEM và hành trang để trẻ làm chủ tương lai số.",
    sessions: "48 buổi",
    schedule: "2 buổi/tuần · 90 phút/buổi",
    months: "6 tháng",
    prerequisites: [
      "Có kỹ năng sử dụng máy tính cơ bản",
      "Có kỹ năng sử dụng internet",
    ],
    knowledge: [
      "Khái niệm cốt lõi về lập trình, thuật toán và vai trò của ngôn ngữ lập trình",
      "Chức năng các thành phần môi trường Scratch (Sân khấu, Nhân vật, Khu vực lệnh…)",
      "Biến số (Variables) và các phép toán liên quan",
      "Cấu trúc điều khiển: tuần tự, vòng lặp (Loops), điều kiện (Conditionals)",
      "Kỹ thuật nâng cao: xử lý sự kiện, gửi/nhận thông điệp (Broadcast), khối lệnh tùy chỉnh (My Blocks)",
    ],
    skills: [
      "Tư duy lập trình (Computational Thinking): chia nhỏ vấn đề lớn thành bài toán con",
      "Tư duy logic & phản biện: phân tích yêu cầu và tìm giải pháp tối ưu",
      "Tư duy sáng tạo: hiện thực hóa ý tưởng thành sản phẩm số hoàn chỉnh",
      "Giải quyết vấn đề có hệ thống và kiên trì",
      "Trình bày & thuyết trình sản phẩm tự tin, mạch lạc",
      "Hợp tác và phối hợp ý tưởng trong dự án nhóm",
    ],
    assessment: [
      "Hoàn thành dự án cá nhân hoặc nhóm (một trò chơi đơn giản hoặc câu chuyện tương tác), ứng dụng cả khối lệnh cơ bản và nâng cao",
      "Kiểm tra lý thuyết qua phần mềm học tập để đánh giá khả năng ghi nhớ và hiểu bài",
    ],
    curriculum: [
      {
        title: "Phần 1 — Nhập môn & các khái niệm nền tảng",
        items: [
          "Giới thiệu môi trường Scratch và giao diện lập trình",
          "Các khối lệnh cơ bản và cách kết hợp tạo chương trình đơn giản",
        ],
      },
      {
        title: "Phần 2 — Thiết kế & chỉnh sửa nhân vật (Sprites)",
        items: [
          "Sử dụng công cụ vẽ và thư viện nhân vật",
          "Tạo hình ảnh động cơ bản và phối hợp với sân khấu (Backdrop)",
        ],
      },
      {
        title: "Phần 3 — Cấu trúc điều khiển: vòng lặp & điều kiện",
        items: [
          "Ứng dụng vòng lặp để lặp lại hành động",
          "Dùng câu lệnh điều kiện tạo tương tác và quyết định trong trò chơi",
        ],
      },
      {
        title: "Phần 4 — Các khái niệm lập trình mở rộng",
        items: [
          "Biến số (Variables) và phép toán trong Scratch",
          "Phát tin (Broadcast) và nhận tin để điều khiển nhiều đối tượng",
          "Cảm biến và khối lệnh tùy chỉnh (My Blocks)",
        ],
      },
      {
        title: "Phần 5 — Phát triển ứng dụng nâng cao",
        items: [
          "Khối lệnh Bản sao (Clones) để tạo đối tượng động",
          "Khối lệnh Bút vẽ (Pen) tạo hiệu ứng đồ họa trực quan",
        ],
      },
      {
        title: "Phần 6 — Phát triển các ứng dụng lập trình",
        items: ["Xây dựng tư duy lập trình và phát triển ứng dụng hoàn chỉnh"],
      },
      {
        title: "Phần 7 — Ôn tập & báo cáo cuối khóa",
        items: [
          "Tự thiết kế và lập trình một trò chơi hoặc ứng dụng hoàn chỉnh",
          "Trình bày và đánh giá dự án theo tiêu chí sáng tạo, kỹ thuật, ứng dụng",
        ],
      },
    ],
    metaTitle: "Khóa học Lập trình Scratch cơ bản cho trẻ 7–15 tuổi",
    metaDescription:
      "Khóa Scratch cơ bản tại CodeSpace (48 buổi): trẻ 7–15 tuổi làm quen tư duy lập trình qua game & hoạt hình, nắm vững thuật toán, vòng lặp, điều kiện và tự làm sản phẩm đầu tay.",
    keywords: [
      "khóa học Scratch cho trẻ em",
      "học lập trình Scratch cơ bản",
      "lập trình kéo thả cho trẻ",
      "học Scratch cho bé 7 tuổi",
    ],
  },

  "scratch-nang-cao": {
    tagline:
      "Vượt khỏi giới hạn cơ bản: làm chủ kỹ thuật nâng cao và chạm tới Trí tuệ Nhân tạo ngay trong Scratch.",
    intro:
      "Khóa học “Scratch Nâng Cao: Trí tuệ nhân tạo & Từ ý tưởng đến sản phẩm sáng tạo” được thiết kế để đưa học sinh vượt ra khỏi giới hạn lập trình cơ bản, tập trung nâng cao năng lực công nghệ toàn diện. Học sinh làm chủ các kỹ thuật lập trình nâng cao (biến, danh sách, khối lệnh tùy chỉnh, bản sao…) và tiếp cận trực quan các công nghệ tiên tiến: chương trình tích hợp Trí tuệ Nhân tạo (AI) và mô hình Máy học Teachable Machine của Google, cho phép học sinh tự huấn luyện mô hình AI để tạo ứng dụng nhận diện cử chỉ hoặc âm thanh. Khóa học cũng kết nối với mạch điện tử Makey Makey để tạo sản phẩm điều khiển vật lý, và rèn quy trình phát triển sản phẩm chuyên nghiệp: từ ý tưởng, vẽ sơ đồ luồng, thiết kế giao diện, lập trình, kiểm thử đến thuyết trình.",
    sessions: "48 buổi",
    schedule: "2 buổi/tuần · 90 phút/buổi",
    months: "6 tháng",
    prerequisites: [
      "Đã hoàn thành khóa Scratch cơ bản hoặc có kiến thức tương đương",
    ],
    tools: ["Teachable Machine (Google)", "Makey Makey", "draw.io", "ChatGPT (có giám sát)"],
    knowledge: [
      "Kỹ thuật nâng cao: biến, danh sách, khối lệnh tùy chỉnh có tham số, bản sao, broadcast, điều kiện phức tạp, vòng lặp lồng nhau",
      "Tiếp cận AI trực quan và huấn luyện mô hình bằng Teachable Machine",
      "Tích hợp mô hình AI vào Scratch: trợ lý ảo mini, nhận diện hình ảnh/âm thanh",
      "Phần mở rộng Makey Makey — kết nối Scratch với đồ vật thật",
      "Text to Speech & Translate, cảm biến Video điều khiển bằng cử chỉ",
    ],
    skills: [
      "Tư duy thiết kế & phân tích dự án theo quy trình sản phẩm chuyên nghiệp",
      "Tư duy logic: biến ý tưởng thành sơ đồ luồng (flowchart) trước khi lập trình",
      "Tư duy sáng tạo từ ý tưởng đến thiết kế giao diện",
      "Kỹ năng phát triển sản phẩm: ý tưởng → thiết kế → lập trình → kiểm thử",
      "Kỹ năng thuyết trình sản phẩm sáng tạo tự tin",
    ],
    assessment: [
      "Hoàn thành dự án cá nhân qua các bước: lên ý tưởng, vẽ flowchart, thiết kế giao diện, lập trình, kiểm thử",
      "Thuyết trình báo cáo dự án cuối khóa",
      "Kiểm tra lý thuyết qua phần mềm học tập",
    ],
    curriculum: [
      {
        title: "Phần 1 — Ôn tập chuyên sâu & kỹ thuật lập trình nâng cao",
        items: [
          "Biến số và Danh sách (Lists)",
          "Khối lệnh tùy chỉnh (My Blocks): tối ưu hóa & tham số hóa",
          "Bản sao (Cloning): quản lý và tương tác phức tạp",
          "Phát & nhận tin (Broadcast): xây dựng luồng sự kiện phức tạp",
        ],
      },
      {
        title: "Phần 2 — Phát triển game nâng cao & tư duy thiết kế",
        items: [
          "Tư duy thiết kế game: từ ý tưởng đến sơ đồ",
          "Xây dựng game theo thiết kế",
          "Kỹ thuật Debugging và tối ưu hóa cơ bản",
        ],
      },
      {
        title: "Phần 3 — Khám phá phần mở rộng sáng tạo & tương tác thực tế",
        items: [
          "Phần mở rộng Makey Makey",
          "Âm nhạc (Music) & Âm thanh (Sound)",
          "Cảm biến Video (Video Sensing)",
          "Text to Speech & Translate",
        ],
      },
      {
        title: "Phần 4 — Tiếp cận Trí tuệ Nhân tạo (AI) & tối ưu hóa",
        items: [
          "Giới thiệu AI trong Scratch (Teachable Machine)",
          "Tối ưu hóa chương trình & dùng ChatGPT hỗ trợ (có giám sát)",
        ],
      },
      {
        title: "Phần 5 — Dự án lớn cuối khóa",
        items: [
          "Lên ý tưởng và lựa chọn dự án cuối khóa",
          "Thiết kế giao diện & trải nghiệm người dùng (UI/UX)",
          "Phát triển, kiểm thử chuyên sâu và sửa lỗi",
          "Thuyết trình báo cáo dự án cuối khóa",
        ],
      },
    ],
    metaTitle: "Khóa học Scratch nâng cao & AI cho trẻ 8–15 tuổi",
    metaDescription:
      "Scratch nâng cao tại CodeSpace (48 buổi): trẻ 8–15 tuổi làm chủ kỹ thuật lập trình nâng cao, huấn luyện AI với Teachable Machine, Makey Makey và tự phát triển sản phẩm sáng tạo hoàn chỉnh.",
    keywords: [
      "khóa học Scratch nâng cao",
      "học AI cho trẻ em với Scratch",
      "Teachable Machine cho trẻ",
      "lập trình game Scratch cho trẻ",
    ],
  },

  "python-co-ban": {
    tagline:
      "Chuyển từ kéo thả sang viết code thật với Python — ngôn ngữ của AI, dữ liệu và phần mềm.",
    intro:
      "Trong thời đại số hóa, kỹ năng lập trình được xem như “ngôn ngữ của tương lai”. Khóa học Lập trình Python cơ bản trang bị cho học sinh khả năng sử dụng thành thạo Python — ngôn ngữ được ứng dụng rộng rãi trong trí tuệ nhân tạo, dữ liệu và phần mềm. Thông qua các bài học và dự án thực tế, học sinh rèn luyện năng lực phân tích, tư duy logic cùng bộ kỹ năng 4C: Critical Thinking, Creativity, Collaboration và Communication — hành trang để giải quyết vấn đề hiệu quả và tự tin hội nhập quốc tế.",
    sessions: "48 buổi",
    schedule: "2 buổi/tuần · 90 phút/buổi",
    months: "6 tháng",
    prerequisites: [
      "Đã hoàn thành khóa Scratch nâng cao hoặc có kiến thức tương đương",
      "Kỹ năng dùng máy tính cơ bản (quản lý file/thư mục, bàn phím, chuột)",
      "Hiểu tiếng Anh cơ bản (đọc và nhận biết từ khóa lập trình)",
      "Có tư duy logic đơn giản",
    ],
    knowledge: [
      "Biến, kiểu dữ liệu (int, float, string, boolean) và các toán tử",
      "Câu lệnh điều kiện (if-else) và vòng lặp (for, while)",
      "Cấu trúc dữ liệu cơ bản: list, tuple, dictionary, set",
      "Hàm và cách sử dụng thư viện cơ bản trong Python",
      "Làm việc với file (đọc/ghi) và xử lý chuỗi (string)",
    ],
    skills: [
      "Viết chương trình Python đơn giản: máy tính mini, quản lý danh sách, trò chơi đoán số",
      "Tư duy lập trình logic: chuyển bài toán thành mã nguồn",
      "Xử lý dữ liệu và tạo file kết quả bằng Python",
      "Giải quyết bài toán thực tế ở mức cơ bản",
    ],
    assessment: [
      "Hoàn thành và thuyết trình dự án cuối khóa dưới sự hướng dẫn của giáo viên",
      "Kiểm tra đánh giá kiến thức qua bài test trắc nghiệm",
    ],
    curriculum: [
      {
        title: "Phần 1 — Giới thiệu & làm quen với Python",
        items: [
          "Cú pháp cơ bản: in thông tin, nhận đầu vào, biến, kiểu dữ liệu, tính toán",
          "Bắt đầu tư duy lập trình qua các bài toán nhỏ về toán học, khoa học, kỹ thuật",
        ],
      },
      {
        title: "Phần 2 — Cấu trúc dữ liệu",
        items: [
          "Thành thạo list, dictionary, tuple và set",
          "Kết hợp các cấu trúc dữ liệu để tổ chức thông tin logic",
          "Ứng dụng xây dựng hệ thống quản lý dữ liệu nhỏ",
        ],
      },
      {
        title: "Phần 3 — Hàm và module",
        items: [
          "Tạo hàm, truyền tham số và sử dụng giá trị trả về",
          "Tổ chức chương trình modular, tăng khả năng tái sử dụng",
          "Sử dụng module chuẩn (math, random) giải quyết vấn đề thực tế",
        ],
      },
      {
        title: "Phần 4 — File và xử lý chuỗi",
        items: [
          "Đọc/ghi và phân tích dữ liệu từ file văn bản hoặc CSV",
          "Xử lý chuỗi ký tự để phân tích và trình bày dữ liệu",
        ],
      },
      {
        title: "Phần 5 — Dự án cuối khóa",
        items: [
          "Tự lên ý tưởng, phân tích thiết kế và lập trình dự án có tính ứng dụng thực tế",
          "Trình bày và đánh giá theo tiêu chí sáng tạo, kỹ thuật, ứng dụng",
        ],
      },
    ],
    metaTitle: "Khóa học Lập trình Python cơ bản cho trẻ 12–17 tuổi",
    metaDescription:
      "Python cơ bản tại CodeSpace (48 buổi): học sinh 12–17 tuổi viết code Python thật — biến, vòng lặp, hàm, cấu trúc dữ liệu, xử lý file — và hoàn thành dự án ứng dụng đầu tay.",
    keywords: [
      "khóa học Python cho trẻ em",
      "học lập trình Python cơ bản",
      "học Python cho học sinh",
      "lập trình Python cho thiếu niên",
    ],
  },

  "python-nang-cao": {
    tagline:
      "Đào sâu Python chuyên nghiệp: hướng đối tượng, thuật toán, dữ liệu và ứng dụng thực tế.",
    intro:
      "Khóa học Lập trình Python nâng cao dành cho lứa tuổi 13–17 giúp học sinh sử dụng Python ở mức chuyên sâu — ngôn ngữ được ứng dụng rộng rãi trong trí tuệ nhân tạo, dữ liệu và phần mềm. Qua các bài học và dự án thực tế, học sinh làm chủ lập trình hướng đối tượng, thuật toán và các thư viện xử lý dữ liệu, đồng thời phát triển bộ kỹ năng 4C (Critical Thinking, Creativity, Collaboration, Communication) để giải quyết vấn đề phức tạp và tự tin hội nhập.",
    sessions: "48 buổi",
    schedule: "2 buổi/tuần · 90 phút/buổi",
    months: "6 tháng",
    prerequisites: [
      "Đã hoàn thành khóa Python cơ bản hoặc có kiến thức tương đương",
      "Thành thạo biến, kiểu dữ liệu, điều kiện, vòng lặp",
      "Biết dùng cấu trúc dữ liệu cơ bản (list, dictionary…) và viết hàm",
      "Có kinh nghiệm làm việc với file",
    ],
    tools: ["Pandas", "Numpy", "Tkinter", "SQLite", "REST API"],
    knowledge: [
      "Lập trình hướng đối tượng (OOP): class, object, kế thừa, đa hình",
      "Thuật toán cơ bản: tìm kiếm (tuyến tính, nhị phân), sắp xếp (bubble, selection, insertion), đệ quy",
      "Xử lý dữ liệu với Pandas, Numpy",
      "Làm việc với API (REST API)",
      "Tạo giao diện người dùng (GUI) bằng Tkinter",
      "Kết nối và làm việc với cơ sở dữ liệu (SQLite)",
    ],
    skills: [
      "Phân tích và giải quyết bài toán phức tạp bằng Python",
      "Viết mã chuyên nghiệp, dễ bảo trì theo nguyên tắc OOP",
      "Xử lý dữ liệu lớn và làm việc với API",
      "Phát triển ứng dụng thực tế (quản lý lịch cá nhân, bán hàng mini…)",
      "Thiết kế cấu trúc chương trình, viết mã, kiểm thử và thuyết trình dự án",
    ],
    assessment: [
      "Hoàn thành dự án cuối khóa: phát triển ứng dụng thực tế và thuyết trình báo cáo",
      "Kiểm tra đánh giá kiến thức qua bài test trắc nghiệm",
    ],
    curriculum: [
      {
        title: "Phần 1 — Ôn tập kiến thức lập trình cơ bản",
        items: [
          "Cú pháp Python, biến, kiểu dữ liệu, vòng lặp",
          "Cấu trúc dữ liệu List, Dictionary, Tuple, Set",
          "Hàm, module và kỹ năng làm việc với file",
        ],
      },
      {
        title: "Phần 2 — Lập trình hướng đối tượng (OOP)",
        items: [
          "Lớp, đối tượng, tính kế thừa, tính đa hình",
          "Rèn luyện kỹ năng lập trình hướng đối tượng",
        ],
      },
      {
        title: "Phần 3 — Cấu trúc dữ liệu và giải thuật",
        items: [
          "Tìm hiểu các thuật toán cơ bản",
          "Ứng dụng thuật toán giải các bài toán điển hình",
        ],
      },
      {
        title: "Phần 4 — Phát triển dự án thực tế",
        items: [
          "Sử dụng các thư viện nâng cao (Pandas, Numpy)",
          "Làm việc với API và thiết kế giao diện người dùng",
          "Kết nối và làm việc với cơ sở dữ liệu",
        ],
      },
      {
        title: "Phần 5 — Dự án cuối khóa",
        items: [
          "Tự lên ý tưởng, phân tích thiết kế và lập trình dự án ứng dụng thực tế",
          "Trình bày và đánh giá theo tiêu chí sáng tạo, kỹ thuật, ứng dụng",
        ],
      },
    ],
    projects: [
      { name: "Ứng dụng quản lý lịch cá nhân", desc: "Ứng dụng thực tế quản lý lịch và công việc cá nhân." },
      { name: "Ứng dụng quản lý bán hàng mini", desc: "Hệ thống bán hàng nhỏ tích hợp cơ sở dữ liệu." },
    ],
    metaTitle: "Khóa học Python nâng cao (OOP, dữ liệu) cho trẻ 13–17 tuổi",
    metaDescription:
      "Python nâng cao tại CodeSpace (48 buổi): học sinh 13–17 tuổi học OOP, thuật toán, xử lý dữ liệu với Pandas/Numpy, API và SQLite, hoàn thành ứng dụng thực tế trọn vẹn.",
    keywords: [
      "khóa học Python nâng cao",
      "học OOP Python cho học sinh",
      "lập trình Python xử lý dữ liệu",
      "học thuật toán Python cho trẻ",
    ],
  },

  "web-python": {
    tagline:
      "Xây 4 ứng dụng web tích hợp AI thật với Flask & Gemini API — như một kỹ sư phần mềm thực thụ.",
    intro:
      "Khóa học Lập trình Web & Trí tuệ nhân tạo (AI) với Flask áp dụng phương pháp Project-based Learning (học qua dự án), kết hợp thực hành cá nhân và làm việc nhóm. CodeSpace tích hợp Workshop GitHub & Teamwork nhằm mô phỏng sát thực tế quy trình cộng tác lập trình tại các doanh nghiệp công nghệ. Xuyên suốt 6 tháng, học sinh xây dựng 4 dự án lớn — từ website cá nhân, bảng tin cộng đồng đến hệ thống AI phân tích cảm xúc và trợ lý học tập thông minh — làm chủ Flask, cơ sở dữ liệu, Git và cách gọi API AI.",
    sessions: "48 buổi",
    schedule: "2 buổi/tuần · 90 phút/buổi",
    months: "6 tháng",
    prerequisites: ["Từ 13 tuổi trở lên", "Đã có nền tảng Python"],
    tools: ["VS Code", "Flask Framework", "GitHub", "Gemini API", "SQLite / SQLAlchemy", "Tailwind CSS", "Chart.js"],
    knowledge: [
      "Cấu trúc HTML5 và thiết kế Responsive với Tailwind CSS",
      "Flask Framework: định tuyến, Jinja2, xử lý Form POST/GET",
      "Cơ sở dữ liệu quan hệ với SQLite (SQLAlchemy) và quản lý phiên (Session)",
      "Xác thực người dùng (đăng ký/đăng nhập bảo mật)",
      "Tích hợp AI qua Gemini API để phân tích văn bản và sinh nội dung",
      "Triển khai website lên Internet (Deployment)",
    ],
    skills: [
      "Tư duy xây dựng giao diện người dùng, không chỉ code logic",
      "Cộng tác nhóm chuyên nghiệp với GitHub (push, kiểm soát phiên bản)",
      "Thiết kế hệ thống: vẽ sơ đồ luồng dữ liệu (Flowchart) trên draw.io",
      "Tư duy sản phẩm end-to-end từ ý tưởng đến ứng dụng chạy thật",
    ],
    assessment: [
      "Hoàn thành 4 dự án web thực tế xuyên suốt khóa học",
      "Dự án cuối khóa AI Study Buddy làm theo nhóm với quy trình chuẩn doanh nghiệp",
      "Thuyết trình và demo sản phẩm",
    ],
    curriculum: [
      {
        title: "Dự án 1 — My Digital Portfolio (Buổi 1–12)",
        items: [
          "Xây website cá nhân giới thiệu bản thân và sản phẩm đã làm",
          "HTML5, thiết kế Responsive với Tailwind CSS",
          "Triển khai web lên Internet — có URL cá nhân gửi cho bạn bè",
        ],
      },
      {
        title: "Dự án 2 — Anonymous Message Board (Buổi 13–24)",
        items: [
          "Bảng tin cộng đồng cho phép để lại lời nhắn ẩn danh",
          "Flask Jinja2, xử lý Form POST/GET, quản lý biến số",
          "Hệ thống “Censor” tự động lọc từ ngữ không phù hợp",
        ],
      },
      {
        title: "Workshop — GitHub & Teamwork (02 buổi)",
        items: ["Kỹ năng cộng tác lập trình, quy trình làm việc nhóm chuyên nghiệp"],
      },
      {
        title: "Dự án 3 — MoodScan AI System (Buổi 25–36)",
        items: [
          "Nhật ký thông minh: AI phân tích cảm xúc từ văn bản",
          "Tích hợp Gemini API cho 5 chỉ số cảm xúc; biểu đồ tâm trạng với Chart.js",
          "Xác thực người dùng, cơ sở dữ liệu SQLite (SQLAlchemy), Session",
        ],
      },
      {
        title: "Dự án 4 (cuối khóa) — AI Study Buddy (Buổi 37–48)",
        items: [
          "Trợ lý học tập cá nhân: tóm tắt bài học và tạo quiz tự động bằng AI",
          "Chatbot giải đáp, Dashboard tiến độ học tập",
          "Database quan hệ (Users, Materials, Quizzes, Results), cộng tác qua GitHub",
        ],
      },
    ],
    projects: [
      { name: "My Digital Portfolio", desc: "Website cá nhân chuyên nghiệp với URL công khai gửi cho bạn bè, gia đình." },
      { name: "Anonymous Message Board", desc: "Ứng dụng web bảng tin ẩn danh có bộ lọc nội dung tự động." },
      { name: "MoodScan AI", desc: "Hệ thống nhật ký dùng AI phân tích cảm xúc và vẽ biểu đồ tâm trạng." },
      { name: "AI Study Buddy", desc: "Trợ lý học tập AI tóm tắt bài học, sinh quiz và chatbot giải đáp." },
    ],
    metaTitle: "Khóa học Lập trình Web & AI với Flask cho trẻ từ 13 tuổi",
    metaDescription:
      "Lập trình Web & AI với Flask tại CodeSpace (48 buổi): học sinh từ 13 tuổi xây 4 web app thật — portfolio, bảng tin, MoodScan AI, AI Study Buddy — với Flask, GitHub và Gemini API.",
    keywords: [
      "khóa học lập trình web cho trẻ em",
      "học Flask cho học sinh",
      "lập trình web và AI cho trẻ",
      "học lập trình AI với Gemini API",
    ],
  },

  "vex-robotics": {
    tagline:
      "Từ kéo thả Scratch đến điều khiển robot vật lý thật — lắp ráp, lập trình và chinh phục thử thách kỹ sư.",
    intro:
      "Trong kỷ nguyên công nghệ, am hiểu Robot và AI là một lợi thế bắt buộc. Khóa học VEX GO giúp học sinh 8–12 tuổi chuyển đổi từ tư duy kéo–thả Scratch sang điều khiển thiết bị vật lý thực thụ. Các em học lắp ráp cơ khí chính xác, lập trình thuật toán, và rèn kỹ năng giải quyết vấn đề qua các dự án thực tế như thám hiểm Sao Hỏa hay tái thiết thành phố. Với lộ trình bài bản từ vẽ lưu đồ thuật toán đến thuyết trình dự án, khóa học là bệ phóng giúp các em hình thành tư duy kỹ sư và làm chủ công nghệ tương lai.",
    sessions: "48 buổi",
    schedule: "2 buổi/tuần · 90 phút/buổi",
    months: "6 tháng",
    prerequisites: ["Học sinh 8–12 tuổi", "Đã có nền tảng Scratch"],
    tools: ["Bộ Kit VEX GO", "Phần mềm VEXcode GO (Blocks)", "draw.io", "Canva"],
    knowledge: [
      "Tư duy nâng cao: dùng biến số, danh sách và My Blocks để tối ưu mã nguồn",
      "Công nghệ thông minh: tự động hóa, AI và cách robot tương tác qua cảm biến mắt & va chạm",
      "Cơ khí & vật lý: cân bằng, trọng tâm; hệ truyền động bánh răng, ròng rọc, đòn bẩy",
      "Lập trình điều khiển: chuyển tư duy Scratch sang VEXcode GO (Sự kiện, Chuyển động, Cảm biến)",
    ],
    skills: [
      "Phân tích & thiết kế kỹ thuật: vẽ sơ đồ luồng (flowchart) trên draw.io",
      "Lập trình & điều khiển: xây kịch bản phức tạp, làm chủ Debugging cơ khí và logic",
      "Sử dụng công cụ: VEXcode GO và Canva (thiết kế poster, tài liệu thuyết trình)",
      "Trình bày ý tưởng: tự tin thuyết trình cơ chế robot và giải thích mã lập trình",
      "Làm việc nhóm theo mô hình “Kỹ sư – Lập trình viên”",
    ],
    assessment: [
      "Hoàn thành dự án cá nhân: lên ý tưởng, vẽ flowchart, lắp ráp cơ khí, lập trình, kiểm thử",
      "Thuyết trình báo cáo dự án cuối khóa (Canva + demo robot)",
      "Kiểm tra lý thuyết qua phần mềm học tập",
    ],
    curriculum: [
      { title: "Chapter 1 — Intro to Building: Nhập môn lắp ráp (4 buổi)", items: ["Làm quen bộ Kit, cột cờ NASA, bệ phóng, tàu vũ trụ, xe Buggy, căn cứ Sao Hỏa"] },
      { title: "Chapter 2 — Simple Machines: Máy đơn giản (3 buổi)", items: ["Mặt phẳng nghiêng, đòn bẩy, bánh xe & trục, hệ thống bánh răng"] },
      { title: "Chapter 3 — Super Car: Xe đua siêu tốc (2 buổi)", items: ["Đo quãng đường, khám phá vận hành, tính vận tốc"] },
      { title: "Chapter 4 — Code Base: Lập trình di chuyển (3 buổi)", items: ["Robot điều khiển từ xa, lập trình di chuyển, cảm biến LED Bumper, giải mê cung bằng cảm biến Mắt"] },
      { title: "Chapter 5 — Robot Arm: Cánh tay robot (3 buổi)", items: ["Lắp & động cơ hóa cánh tay, nam châm điện, cảm biến, dây chuyền sản xuất"] },
      { title: "Chapter 6 — Mars Rover: Khám phá Sao Hỏa (3 buổi)", items: ["Thu thập & nghiên cứu mẫu đá, phân loại mẫu vật, làm nhà địa chất"] },
      { title: "Chapter 7 — Ocean Science: Thám hiểm đại dương (3 buổi)", items: ["Lắp cảm biến, khám phá dữ liệu, quan sát núi lửa, bảo vệ môi trường biển"] },
      { title: "Chapter 8 — City Rebuild: Tái thiết thành phố (3 buổi)", items: ["Hỗ trợ bệnh viện, lắp mái nhà, trạm năng lượng, phòng chống sạt lở"] },
      { title: "Chapter 9 — Physical Science: Khoa học vật lý (3 buổi)", items: ["Động lực học, va chạm, trọng lực, thế năng"] },
      { title: "Chapter 10 — Robot Jobs: Nghề nghiệp của robot (3 buổi)", items: ["Robot cống, robot kho, hội chợ nghề nghiệp robot"] },
      { title: "Chapter 11 — Mở rộng & thử thách bổ trợ (7 buổi)", items: ["Cứu hộ động vật, địa hình trái đất, thám hiểm đảo, nghệ thuật xoay, robot ném bóng, chống động đất"] },
      { title: "Chapter 12 — Final Project & Capstone (11 buổi)", items: ["Xe diễu hành, dự án cuối khóa tự chọn (flowchart, lắp ráp, lập trình), Presentation Day"] },
    ],
    projects: [
      { name: "Mars Rover", desc: "Lập trình Code Base thành robot thám hiểm thu thập mẫu vật trên Sao Hỏa." },
      { name: "Robot Arm", desc: "Cánh tay robot với các bộ phận cải tiến, tìm hiểu cơ chế hoạt động." },
      { name: "Super Car", desc: "Nghiên cứu các biến số ảnh hưởng đến chuyển động của siêu xe." },
      { name: "Robot Jobs", desc: "Robot thực hiện công việc lặp lại trong môi trường ô nhiễm/nguy hiểm." },
    ],
    metaTitle: "Khóa học VEX GO Robotics cho trẻ 8–12 tuổi",
    metaDescription:
      "VEX GO Robotics tại CodeSpace (48 buổi): trẻ 8–12 tuổi lắp ráp và lập trình robot vật lý với VEXcode GO qua các dự án Sao Hỏa, đại dương, tái thiết thành phố — hình thành tư duy kỹ sư.",
    keywords: [
      "khóa học robotics cho trẻ em",
      "học VEX GO Robotics",
      "lập trình robot cho trẻ",
      "học robot cho bé 8 tuổi",
    ],
  },
};
