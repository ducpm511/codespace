/**
 * Thông tin liên hệ & site — 1 nguồn sự thật.
 * Lấy từ website production hiện tại (repo ducpm511/codespace).
 */
export const site = {
  name: "CodeSpace",
  tagline: "Kiến tạo công dân số",
  description:
    "Trung tâm đào tạo lập trình & công nghệ cho trẻ 7–16 tuổi. Từ Scratch đến Python, robot VEX và AI — mỗi học viên tự tay tạo ra sản phẩm thật.",
  // Domain apex (không "www") — đây là domain thật đang phân giải DNS.
  // Dùng cho metadataBase → og:image, canonical, JSON-LD, sitemap.
  url: "https://codespace.edu.vn",

  // Điện thoại
  phone: "03456 12 838",
  phoneHref: "tel:0345612838",
  mobile: "0969 546 306",
  mobileHref: "tel:0969546306",

  email: "huyenhn@codespace.edu.vn",

  // Địa chỉ (cơ sở Bà Rịa; một cơ sở sắp mở tại TP. Cần Thơ)
  address: "62-64 Nguyễn Thị Định, phường Bà Rịa, thành phố Hồ Chí Minh",
  location: "TP. Hồ Chí Minh",
  mapsUrl: "https://maps.app.goo.gl/8vHChVzMXntxn123A",
  // Toạ độ cơ sở (resolve từ mapsUrl) — dùng cho bản đồ nhúng
  lat: 10.4940045,
  lng: 107.1860374,

  // Mạng xã hội
  facebook: "https://www.facebook.com/CodeSpaceVietNam",

  // Google (tái sử dụng từ site cũ — cùng domain codespace.edu.vn)
  gaId: "G-4BVESVKHV0", // Google Analytics 4 Measurement ID
  googleSiteVerification: "4LRDJjTOt-m4ofwIW3F8mh-OrJEZIf9ucErV_XV4J-4", // Search Console

  // Video giới thiệu — phóng sự truyền hình về CodeSpace.
  // youtubeStart: giây bắt đầu (0 = phát từ đầu).
  youtubeId: "qXJR-7MAKlw",
  youtubeStart: 0,

  // Năm thành lập (dùng cho structured data)
  founded: "2023",

  /**
   * Bộ từ khóa SEO — chọn từ nghiên cứu thị trường lập trình trẻ em VN.
   * Kết hợp: từ khóa đầu (head), theo công nghệ, theo địa phương & long-tail.
   * Dùng cho <meta keywords> và tham chiếu khi viết nội dung.
   */
  keywords: [
    // Head terms (volume cao)
    "khóa học lập trình cho trẻ em",
    "học lập trình cho trẻ",
    "lập trình cho trẻ em",
    "trung tâm dạy lập trình cho trẻ",
    "dạy lập trình cho trẻ em",
    // Theo công nghệ
    "học Scratch cho trẻ em",
    "lập trình Scratch cho trẻ",
    "học Python cho trẻ em",
    "lập trình Python cho học sinh",
    "học robotics cho trẻ em",
    "VEX Robotics Việt Nam",
    "STEM STEAM cho trẻ em",
    "lập trình game cho trẻ em",
    "học AI cho trẻ em",
    // Theo độ tuổi
    "lập trình cho trẻ 7-16 tuổi",
    "khóa học công nghệ cho học sinh",
    // Địa phương
    "học lập trình cho trẻ ở Bà Rịa Vũng Tàu",
    "trung tâm lập trình robotics Vũng Tàu",
    "học lập trình cho trẻ Cần Thơ",
  ],
};
