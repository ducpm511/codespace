import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CourseBar from './CourseBar';
import CourseContent from './CourseContent';

const CourseMain = () => {
    return (
        <div>
            <Breadcrumb breadcrumbTitle="Courses" breadcrumbSubTitle="Courses" />
            <CourseBar />
            <CourseContent />
        </div>
    );
};

export default CourseMain;