import React, { useState } from "react";
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';
import CourseProgressbar from './CourseProgressbar';
import CourseDetailsInstructor from './CourseDetailsInstructor';
import CourseDetailsSidebar from './CourseDetailsSidebar';
import CourseCurriculam from './CourseCurriculam';

const CourseDetailsMain = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Courses" breadcrumbSubTitle="MySQL Database : Beginner SQL Database Design" />

            <section className="course-detalis-area pb-90">
                <div className="container">
                    <div className="row">
                        <div className=" col-xxl-8 col-xl-8">
                            <div className="course-detalis-wrapper mb-30">
                                <div className="course-heading mb-20">
                                    <h2>MySQL Database : Beginner SQL Database Design</h2>
                                    <div className="course-star">
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
                                    </div>
                                </div>
                                <div className="course-detelis-meta">
                                    <div className="course-meta-wrapper border-line-meta">
                                        <div className="course-meta-img">
                                            <Link href="/instructor-profile"><a><img src="assets/img/course/course-meta.png" alt="course-meta"/></a></Link>
                                        </div>
                                        <div className="course-meta-text">
                                            <span>Created by</span>
                                            <h6><Link href="/instructor-profile"><a>David Allberto</a></Link></h6>
                                        </div>
                                    </div>
                                    <div className="course-Enroll border-line-meta">
                                        <p>Total Enrolled</p>
                                        <span>5,420</span>
                                    </div>
                                    <div className="course-update border-line-meta">
                                        <p>Last Update</p>
                                        <span>01 January 2022 </span>
                                    </div>
                                    <div className="course-category">
                                        <p>01 January 2022 </p>
                                        <span><Link href="/course"><a>Data Science</a></Link></span>
                                    </div>
                                </div>
                                <div className="course-description pt-45 pb-30">
                                    <div className="course-Description">
                                        <h4>Description</h4>
                                    </div>
                                    <p>This course has been designed by two professional Data Scientists so that we can
                                        share our knowledge and help you learn complex theory, algorithms, and coding
                                        libraries in a simple way. We will walk you step-by-step into the World of Machine
                                        Learning. With every tutorial, you will develop new skills and improve your
                                        understanding of this challenging yet lucrative sub-field of Data Science.</p>
                                </div>
                                <div className="course-learn-wrapper">
                                    <div className="course-learn">
                                        <div className="course-leranm-tittle">
                                            <h4 className="mb-15">What you'll learn</h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="course-leran-text f-left">
                                                    <ul>
                                                        <li>Handle advanced techniques like Dimensionality Reduction</li>
                                                        <li>Handle specific topics like Reinforcement Learning best</li>
                                                        <li>Know which Machine Learning model to choose for each type of
                                                            problem</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-requirements pt-45">
                                    <h4>Requirements</h4>
                                    <div className="course-requirements-text">
                                        <ul>
                                            <li>• High School Mathematics Level</li>
                                            <li>• Basic Python Knowledge Required</li>
                                            <li>• Broadband Internet</li>
                                        </ul>
                                    </div>
                                </div>
                                <CourseCurriculam />
                                <CourseDetailsInstructor />
                                <div className="student-feedback pt-45 ">
                                    <h3>Student Feedback</h3>
                                    <div className="row">
                                        <div className="col-xl-3">
                                            <div className="reating-point mb-30">
                                                <div className="rating-point-wrapper text-center">
                                                    <h2>4.7</h2>
                                                    <div className="rating-star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span>5785 Rating</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9">
                                            <CourseProgressbar />
                                        </div>
                                    </div>
                                </div>
                                <div className="course-detalis-reviews pt-15">
                                    <div className="course-detalis-reviews-tittle">
                                        <h3>Reviews</h3>
                                    </div>
                                    <div className="course-review-item mb-30">
                                        <div className="course-reviews-img">
                                            <a href="#"><img src="assets/img/course/course-reviews-1.png" alt="image not found"/></a>
                                        </div>
                                        <div className="course-review-list">
                                            <h5><a href="#">Sotapdi Kunda</a></h5>
                                            <div className="course-start-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span>55 min ago</span>
                                            </div>
                                            <p>Very clean and organized with easy to follow tutorials, Exercises, and
                                                solutions.
                                                This course does start from the beginning with very little knowledge and
                                                gives a
                                                great overview of common tools used for data science and progresses into
                                                more
                                                complex concepts and ideas.</p>
                                        </div>
                                    </div>
                                    <div className="course-review-item mb-30">
                                        <div className="course-reviews-img">
                                            <a href="#"><img src="assets/img/course/course-reviews-2.png" alt="image not found"/></a>
                                        </div>
                                        <div className="course-review-list">
                                            <h5><a href="#">Samantha</a></h5>
                                            <div className="course-start-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span>45 min ago</span>
                                            </div>
                                            <p>The course is good at explaining very basic intuition of the concepts. It
                                                will get
                                                you scratching the surface so to say. where this course is unique is the
                                                implementation methods are so well defined Thank you to the team !.</p>
                                        </div>
                                    </div>
                                    <div className="course-review-item mb-30">
                                        <div className="course-reviews-img">
                                            <a href="#"><img src="assets/img/course/course-reviews-3.png" alt="image not found"/></a>
                                        </div>
                                        <div className="course-review-list">
                                            <h5><a href="#">Michell Mariya</a></h5>
                                            <div className="course-start-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <span>30 min ago</span>
                                            </div>
                                            <p>This course is amazing..!
                                                I started this course as a beginner and learnt a lot. Instructors are great.
                                                Query
                                                handling can be improved.Overall very happy with the course.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="course-review-btn">
                                        <span id="show-review-box" className="edu-btn" onClick={handleToggle}>Write a Review</span>
                                        <div id="review-box" className={`review-comment mt-45 ${isActive ? "danger" : "d-block"}`}>
                                            <div className="comment-title mb-20">
                                                <p>Your email address will not be published. Required fields are marked *
                                                </p>
                                            </div>
                                            <div className="comment-rating mb-20">
                                                <span>Overall ratings</span>
                                                <ul>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    <li><a href="#"><i className="fal fa-star"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="comment-input-box mb-15">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-xxl-12">
                                                            <textarea placeholder="Your review"
                                                                className="comment-input comment-textarea mb-20"></textarea>
                                                        </div>
                                                        <div className="col-xxl-6">
                                                            <div className="comment-input mb-20">
                                                                <input type="text" placeholder="Your Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6">
                                                            <div className="comment-input mb-20">
                                                                <input type="email" placeholder="Your Email"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12">
                                                            <div className="comment-submit">
                                                                <button type="submit" className="edu-btn">Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-8 col-md-8">
                            <CourseDetailsSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseDetailsMain;