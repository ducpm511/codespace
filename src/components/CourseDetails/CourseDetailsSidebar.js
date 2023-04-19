import React, { useState } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

import SignUp from '../../components/Layout/Header/HeaderOne/SignUp';

const CourseDetailsSidebar = ({courseData}) => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    const [signupOpen, setSignUpOpen] = useState(false)

    return (
        <div className="course-video-widget">
            <div className="course-widget-wrapper mb-30">
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                <div className="course-video-thumb w-img">
                    <img src={courseData.image_src} alt={courseData.title}/>
                    {/* <div className="sidber-video-btn">
                        <span className="popup-video" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                    </div> */}
                </div>
                {/* <div className="course-video-price">
                    <span>$147.00</span>
                </div> */}
                <div className="course-video-body">
                    <ul>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-filter"></i>
                                <span>Độ tuổi phù hợp</span>
                            </div>
                            <div className="video-corse-info">
                                <span>{courseData.details.age} tuổi</span>
                            </div>
                        </li>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-computer"></i>
                                <span>Số buổi học</span>
                            </div>
                            <div className="video-corse-info">
                                <span>{courseData.details.duration}</span>
                            </div>
                        </li>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-clock"></i>
                                <span>Thời lượng mỗi buổi học</span>
                            </div>
                            <div className="video-corse-info">
                                <span>{courseData.details.lesson_duration}</span>
                            </div>
                        </li>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-menu-2"></i>
                                <span>Số buổi trên tuần</span>
                            </div>
                            <div className="video-corse-info">
                                <span>{courseData.details.lessons_week}</span>
                            </div>
                        </li>
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-global"></i>
                                <span>Ngôn ngữ lập trình</span>
                            </div>
                            <div className="video-corse-info">
                                <span>{courseData.details.language}</span>
                            </div>
                        </li>
                        {/* <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-bookmark-white"></i>
                                <span>Access</span>
                            </div>
                            <div className="video-corse-info">
                                <span>Full Lifetime</span>
                            </div>
                        </li> */}
                        <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-award"></i>
                                <span>Chứng chỉ</span>
                            </div>
                            <div className="video-corse-info">
                                <span>Có </span>
                            </div>
                        </li>
                        {/* <li>
                            <div className="course-vide-icon">
                                <i className="flaticon-list"></i>
                                <span>Recourse</span>
                            </div>
                            <div className="video-corse-info">
                                <span>5 Downloadable Files </span>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <div className="video-wishlist">
                    <a className="video-cart-btn" onClick={() => { setSignUpOpen(!signupOpen) }}>Đăng Ký</a>
                    {/* <Link href="/wishlist"><a className="video-wishlist-btn"><i className="far fa-heart"></i>Add to Wishlist</a></Link> */}
                </div>
                {/* <div className="course-gift">
                    <div className="course-apply-coupon">
                        <a href="#">Apply Coupon</a>
                    </div>
                    <div className="course-gift-coupon">
                        <a href="#">Gift Courses</a>
                    </div>
                </div> */}
            </div>
            <SignUp signupOpen={signupOpen} setSignUpOpen={setSignUpOpen} selectedCourse={courseData.title} />
            <div onClick={() => setSignUpOpen(false)} className={signupOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
        </div>
    );
};

export default CourseDetailsSidebar;