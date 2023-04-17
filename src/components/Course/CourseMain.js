import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
// import CourseBar from './CourseBar';
import CourseContent from './CourseContent';


const CourseMain = ({filters, selectedFilters, courses}) => {
    
    return (
        <div>
            <Breadcrumb breadcrumbTitle="Khoá Học" breadcrumbSubTitle="Khoá Học" />
            {/* <CourseBar /> */}
            <CourseContent filters={filters} selectedFilters={selectedFilters} courses={courses}/>
            
        </div>
    );
};

export default CourseMain;