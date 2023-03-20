import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CounterSectionThree from '../HomeThree/CounterSectionThree';
import InstructorFeature from './InstructorFeatureSection';
import InstructorToday from './InstructorToday';
import StepJourneySection from './StepJourneySection';

const BecomeInstructorMain = () => {
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Become an Instructor" breadcrumbSubTitle="Become an Instructor" />
            <InstructorFeature />
            <CounterSectionThree />
            <StepJourneySection />
            <InstructorToday />
        </main>
    );
};

export default BecomeInstructorMain;