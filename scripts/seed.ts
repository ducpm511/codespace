import { getPayload } from "payload";
import config from "@payload-config";

/** Tạo dữ liệu mẫu để kiểm thử blog: 1 admin, 1 danh mục, 1 bài đã xuất bản. */
function paragraph(text: string) {
  return {
    type: "paragraph",
    version: 1,
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    children: [
      { type: "text", text, version: 1, format: 0, mode: "normal", detail: 0, style: "" },
    ],
  };
}

function heading(text: string) {
  return {
    type: "heading",
    tag: "h2",
    version: 1,
    direction: "ltr" as const,
    format: "" as const,
    indent: 0,
    children: [
      { type: "text", text, version: 1, format: 0, mode: "normal", detail: 0, style: "" },
    ],
  };
}

const run = async () => {
  const payload = await getPayload({ config });

  // Dọn dữ liệu blog cũ để seed idempotent (không đụng users).
  await payload.delete({ collection: "posts", where: {} });
  await payload.delete({ collection: "categories", where: {} });

  const users = await payload.find({ collection: "users", limit: 1 });
  const author =
    users.totalDocs > 0
      ? users.docs[0]
      : await payload.create({
          collection: "users",
          data: {
            name: "Admin CodeSpace",
            email: "admin@codespace.edu.vn",
            password: "CodeSpace@2026",
            roles: ["admin"],
          },
        });

  const cat = await payload.create({
    collection: "categories",
    data: { name: "Kiến thức lập trình" },
  });

  await payload.create({
    collection: "posts",
    data: {
      title: "Vì sao trẻ nên học lập trình từ sớm?",
      excerpt:
        "Học lập trình không chỉ để trở thành lập trình viên — đó là cách rèn tư duy logic, sáng tạo và giải quyết vấn đề cho trẻ trong kỷ nguyên số.",
      _status: "published",
      publishedAt: new Date().toISOString(),
      category: cat.id,
      author: author.id,
      content: {
        root: {
          type: "root",
          version: 1,
          direction: "ltr",
          format: "",
          indent: 0,
          children: [
            paragraph(
              "Trong thời đại số, lập trình đang dần trở thành một kỹ năng nền tảng như đọc và viết. Nhưng lợi ích lớn nhất khi cho trẻ học sớm không nằm ở việc viết được code, mà ở tư duy mà quá trình đó rèn luyện."
            ),
            heading("1. Rèn tư duy logic và giải quyết vấn đề"),
            paragraph(
              "Khi lập trình, trẻ học cách chia một vấn đề lớn thành các bước nhỏ, thử nghiệm, tìm lỗi và cải tiến — chính là quy trình tư duy áp dụng được cho mọi môn học và cả cuộc sống."
            ),
            heading("2. Biến trẻ thành người kiến tạo"),
            paragraph(
              "Thay vì chỉ tiêu thụ công nghệ, trẻ tự tay tạo ra game, hoạt hình hay robot của riêng mình. Cảm giác làm chủ đó nuôi dưỡng sự tự tin và đam mê sáng tạo."
            ),
          ],
        },
      },
    },
  });

  console.log("SEED_DONE: đã tạo user + category + 1 bài blog published");
  process.exit(0);
};

run().catch((e) => {
  console.error("SEED_ERROR", e);
  process.exit(1);
});
