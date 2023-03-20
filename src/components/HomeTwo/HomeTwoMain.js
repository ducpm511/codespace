import React from 'react';
import dynamic from 'next/dynamic';
const CategorySlider = dynamic(() => import('../Elements/Slider/CategorySlider'), {
    ssr: false
  })
import CourseTabTwo from '../Elements/Tabs/CourseTabTwo';
import FeatureSection from '../Home/FeatureSection';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import CounterSection from './CounterSection';
import HeroSectionTwo from './HeroSectionTwo';
import PartnerSection from './PartnerSection';
import SkillSection from './SkillSection';
import TeacherSection from './TeacherSection';
import ZoomSection from './ZoomSection';

const HomeTwoMain = () => {
    return (
        <main>
            <HeroSectionTwo />
            <CounterSection />
            <AboutSection />
            <CategorySlider />
            <CourseTabTwo />
            <PartnerSection />
            <FeatureSection />
            <TeacherSection />
            <ZoomSection />
            <SkillSection />
            <BlogSection />
        </main>
    );
};

export default HomeTwoMain;