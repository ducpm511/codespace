/**
 * Structured data (JSON-LD schema.org) cho SEO.
 * Giúp Google hiểu CodeSpace là một tổ chức giáo dục địa phương,
 * hiển thị rich snippet cho FAQ, khóa học và thông tin liên hệ.
 */
import { site } from "@/data/site";
import { courses } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";
import { faqs } from "@/data/faqs";

const ORG_ID = `${site.url}/#organization`;

/** URL trang chi tiết nếu có, ngược lại về anchor trong trang danh sách. */
function courseUrl(slug: string) {
  return courseDetails[slug]
    ? `${site.url}/khoa-hoc/${slug}`
    : `${site.url}/khoa-hoc#${slug}`;
}

/** "7–15 tuổi" -> "7-15"; "Từ 13 tuổi" -> "13-" */
function ageRange(raw: string) {
  const nums = raw.match(/\d+/g) ?? [];
  if (nums.length >= 2) return `${nums[0]}-${nums[1]}`;
  if (nums.length === 1) return `${nums[0]}-`;
  return undefined;
}

/** EducationalOrganization + LocalBusiness — dùng cho local SEO & brand. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: "CodeSpace Việt Nam",
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/students-team.jpg`,
    slogan: site.tagline,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "62-64 Nguyễn Thị Định, phường Bà Rịa",
      addressLocality: "Thành phố Hồ Chí Minh",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.lat,
      longitude: site.lng,
    },
    hasMap: site.mapsUrl,
    areaServed: ["Bà Rịa - Vũng Tàu", "Thành phố Hồ Chí Minh", "Cần Thơ"],
    sameAs: [site.facebook],
    knowsAbout: [
      "Lập trình cho trẻ em",
      "Scratch",
      "Python",
      "VEX Robotics",
      "STEM",
      "STEAM",
      "Trí tuệ nhân tạo",
    ],
  };
}

/** WebSite — tên site cho Google Sitelinks. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "vi-VN",
    publisher: { "@id": ORG_ID },
  };
}

/** FAQPage — hiển thị câu hỏi thường gặp ngay trên kết quả tìm kiếm. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** ItemList of Course — cho trang danh sách khóa học. */
export function coursesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: `${c.name} — lập trình cho trẻ ${c.ageRange}`,
        description: c.previewDesc,
        url: courseUrl(c.slug),
        educationalLevel: c.level,
        provider: { "@id": ORG_ID },
        offers: {
          "@type": "Offer",
          category: "Paid",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}

/** Course schema đầy đủ — cho trang chi tiết /khoa-hoc/[slug]. */
export function courseSchema(slug: string) {
  const course = courses.find((c) => c.slug === slug);
  const detail = courseDetails[slug];
  if (!course || !detail) return {};
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: detail.metaDescription,
    url: `${site.url}/khoa-hoc/${slug}`,
    inLanguage: "vi-VN",
    educationalLevel: course.level,
    teaches: detail.knowledge,
    typicalAgeRange: ageRange(course.ageRange),
    provider: { "@id": ORG_ID },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      courseWorkload: detail.sessions,
      location: {
        "@type": "Place",
        name: site.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: "62-64 Nguyễn Thị Định, phường Bà Rịa",
          addressLocality: "Thành phố Hồ Chí Minh",
          addressCountry: "VN",
        },
      },
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      availability: "https://schema.org/InStock",
      url: `${site.url}/khoa-hoc/${slug}`,
    },
  };
}

/** BlogPosting — bài blog, cho rich result bài viết. */
export function articleSchema(opts: {
  title: string;
  description?: string;
  slug: string;
  image?: string | null;
  datePublished?: string | null;
  dateModified?: string | null;
  authorName?: string | null;
}) {
  const url = `${site.url}/blog/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "vi-VN",
    ...(opts.image ? { image: [opts.image] } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
    author: opts.authorName
      ? { "@type": "Person", name: opts.authorName }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/** BreadcrumbList — điều hướng phân cấp trong kết quả tìm kiếm. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
