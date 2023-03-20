import React from 'react';
import AcademicCourse from './AcademicCourse';
import BlogSectionThree from './BlogSectionThree';
import CampusSection from './CampusSection';
import CounterSectionThree from './CounterSectionThree';
import EventSection from './EventSection';
import GallaryInstaSection from './GallaryInstaSection';
import HeroSectionThree from './HeroSectionThree';
import UniversityCardSection from './UniversityCardSection';
import UniversityMessage from './UniversityMessage';

const HomeThreeMain = () => {
    return (
        <main>
            <HeroSectionThree />
            <UniversityCardSection />
            <UniversityMessage />
            <AcademicCourse />
            <CounterSectionThree />
            <CampusSection />
            <EventSection />
            <BlogSectionThree />
            <GallaryInstaSection />
        </main>
    );
};

export default HomeThreeMain;