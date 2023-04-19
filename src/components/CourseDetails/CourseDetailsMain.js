import React, { useState } from "react";
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';
import CourseProgressbar from './CourseProgressbar';
import CourseDetailsInstructor from './CourseDetailsInstructor';
import CourseDetailsSidebar from './CourseDetailsSidebar';
import CourseCurriculam from './CourseCurriculam';

const CourseDetailsMain = ({courseData}) => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <main>
            <Breadcrumb breadcrumbTitle={`${courseData.title}`} breadcrumbSubTitle={`${courseData.title}`} />

            <section className="course-detalis-area pb-90">
                <div className="container">
                    <div className="row">
                        <div className=" col-xxl-8 col-xl-8">
                            <div className="course-detalis-wrapper mb-30">
                                <div className="course-heading mb-20">
                                    <h2>{courseData.title}</h2>
                                    {/* <div className="course-star">
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                        </ul>
                                        <ul>
                                            <li><i className="fal fa-star"></i></li>
                                        </ul>
                                        <span>(254 reviews)</span>
                                    </div> */}
                                </div>
                                <div className="course-detelis-meta">
                                    <div className="course-meta-wrapper border-line-meta">
                                        <div className="course-meta-img">
                                            <Link href="/instructor-profile"><a><img src="/assets/img/logo/square-symbol-logo.png" alt="course-meta"/></a></Link>
                                        </div>
                                        <div className="course-meta-text">
                                            <span>Thiết kế bởi</span>
                                            <h6><Link href="/instructor-profile"><a>CodeSpace</a></Link></h6>
                                        </div>
                                    </div>
                                    {/* <div className="course-Enroll border-line-meta">
                                        <p>Total Enrolled</p>
                                        <span>5,420</span>
                                    </div> */}
                                    <div className="course-update border-line-meta">
                                        <p>Thời gian khai giảng dự kiến</p>
                                        <span>{courseData.details.start_date}</span>
                                    </div>
                                    <div className="course-category">
                                        <p>Thời lượng khoá học </p>
                                        <span><Link href="/course"><a>{courseData.details.duration} buổi</a></Link></span>
                                    </div>
                                </div>
                                <div className="course-description pt-45 pb-30">
                                    <div className="course-Description">
                                        <h4>Mô tả khoá học</h4>
                                    </div>
                                    <p>{courseData.short_description}</p>
                                </div>
                                <div className="course-learn-wrapper">
                                    <div className="course-learn">
                                        <div className="course-leranm-tittle">
                                            <h4 className="mb-15">Học viên học được gì sau khóa học</h4>
                                        </div>
                                        <div className="row">
                                            {
                                                courseData.key_point.map((p, idx)=>{
                                                    return(
                                                        <div className="col-xl-6" key={`point-${idx}`}>
                                                            <div className="course-leran-text f-left">
                                                                <ul>
                                                                    <li>{p}</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                            
                                            {/* <div className="col-xl-6">
                                                <div className="course-leran-text">
                                                    <ul>
                                                        <li>Reinforcement learning upper
                                                            confidence bound Thompson sampling</li>
                                                        <li>Model Selection and Boosting fold cross
                                                            validation parameter</li>
                                                        <li>Use Machine Learning for personal
                                                            purpose of machine</li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="course-requirements pt-45">
                                    <h4>Các dự án học viên sẽ được thực hành:</h4>
                                    <div className="course-requirements-text">
                                        <ul>
                                            <li>• High School Mathematics Level</li>
                                            {
                                                courseData.details.projects.map((project, idx)=>{
                                                    return(
                                                        <li key={`project-${idx}`}>• {project}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
                            <CourseDetailsSidebar courseData={courseData}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseDetailsMain;