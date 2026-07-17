import HeroHome from "@/components/HeroHome/HeroHome";
import LogoStrip from "@/components/LogoStrip/LogoStrip";
import WhySection from "@/components/WhySection/WhySection";
import VideoSection from "@/components/VideoSection/VideoSection";
import CoursePreview from "@/components/CoursePreview/CoursePreview";
import RoadmapSection from "@/components/RoadmapSection/RoadmapSection";
import ProjectShowcase from "@/components/ProjectShowcase/ProjectShowcase";
import FacilitySection from "@/components/FacilitySection/FacilitySection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import InstructorSection from "@/components/InstructorSection/InstructorSection";
import StatsSection from "@/components/StatsSection/StatsSection";
import FAQAccordion from "@/components/FAQAccordion/FAQAccordion";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import CTARegistration from "@/components/CTARegistration/CTARegistration";
import Footer from "@/components/Footer/Footer";
import JsonLd from "@/components/JsonLd/JsonLd";
import { faqSchema, coursesSchema } from "@/lib/structuredData";

// Trang chủ tĩnh (ISR) — làm mới định kỳ để cập nhật section "Bài viết mới nhất".
export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqSchema(), coursesSchema()]} />
      <HeroHome />
      <LogoStrip />
      <WhySection />
      <VideoSection />
      <CoursePreview />
      <RoadmapSection />
      <ProjectShowcase />
      <FacilitySection />
      <TestimonialSection />
      <InstructorSection
        group="teacher"
        badge="Đội ngũ giảng viên"
        title="Thầy cô vừa giỏi nghề, vừa hiểu tâm lý học viên"
        subtitle="Đội ngũ chuyên gia giàu kinh nghiệm, được đào tạo bài bản về nghiệp vụ sư phạm và phương pháp tổ chức lớp học"
        showTags
      />
      <StatsSection />
      <FAQAccordion />
      <LatestPosts />
      <CTARegistration />
      <Footer variant="full" />
    </>
  );
}
