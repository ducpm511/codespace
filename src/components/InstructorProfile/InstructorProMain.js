import React from 'react';
import Link from 'next/link';
import Breadcrumb from '../Common/Breadcrumb';

const InstructorProMain = () => {
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Instructor" breadcrumbSubTitle="David Allberto" />

            <div className="course-detalies-area pt-120 pb-100">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="course-instructors-img mb-30">
                            <img src="assets/img/course/course-instructors.png" alt="nstructors-img"/>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-9">
                        <div className="course-detelies-wrapper">
                            <div className="course-detiles-tittle mb-30">
                                <h3>David Allberto</h3>
                                <span>Software Developer</span>
                            </div>
                            <div className="course-detiles-meta">
                                <div className="total-course">
                                <span>Total Courses</span>
                                <label>22</label>
                                </div>
                                <div className="student course">
                                <span>Students</span>
                                <label>5,230</label>
                                </div>
                                <div className="review-course">
                                <span>Review</span>
                                <div className="review-course-inner d-flex">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                    </ul>
                                    <p>4.9 (540)</p>
                                </div>
                                </div>
                                <div className="course-details-action">
                                <div className="course-follow">
                                    <a href="#!" className="edu-follow-btn">Follow</a>
                                </div>
                                <div className="course-share">
                                    <a href="#" className="share-btn"><i className="far fa-share-alt"></i></a>
                                </div>
                                </div>
                            </div>
                            <div className="course-bio-text pt-45 pb-20">
                                <h3>Biography</h3>
                                <p>David Allberto is a Software Developer and Instructor having enjoyed his courses to date. He
                                is the creator of Codexpand, a place of learning and growth to help people move into and be
                                successful within the Helping Industry. One of Graham's key driving forces is to remove the
                                barriers to the Helping Industry by producing high quality, accredited courses at affordable
                                prices.</p>
                            </div>
                            <div className="my-course-info">
                                <h3>My Courses</h3>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-img w-img">
                                        <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-01.jpg" alt="course-img"/></a></Link>
                                    </div>
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link href="/course"><a className="course-link-color-1">Development</a></Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link href="/course-details"><a>WordPress Development Course for Plugins and Themes</a></Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-01.png" alt="image not found"/></a></Link>
                                                <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                            viewBox="0 0 16.471 16.471">
                                            <g id="blackboard-52441" transform="translate(-0.008)">
                                                <path id="Path_101-65441" data-name="Path 101"
                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                    fill="#575757" />
                                            </g>
                                            </svg>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-img w-img">
                                        <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-02.jpg" alt="course-img"/></a></Link>
                                    </div>
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link href="/course"><a className="course-link-color-2">Life Style</a></Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link href="/course-details"><a>Master Google Docs: Free online documents for personal use</a></Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-02.png" alt="image not found"/></a></Link>
                                                <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                            viewBox="0 0 16.471 16.471">
                                            <g id="blackboard-1244" transform="translate(-0.008)">
                                                <path id="Path_10154542" data-name="Path 101"
                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                    fill="#575757" />
                                            </g>
                                            </svg>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-img w-img">
                                        <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-03.jpg" alt="course-img"/></a></Link>
                                    </div>
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link href="/course"><a className="course-link-color-3">Business</a></Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link href="/course-details"><a>Write Better Emails: Tactics for Smarter Team Communication</a></Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-04.png" alt="image not found"/></a></Link>
                                                <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                            viewBox="0 0 16.471 16.471">
                                            <g id="blackboard" transform="translate(-0.008)">
                                                <path id="Path_101" data-name="Path 101"
                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                    fill="#575757" />
                                            </g>
                                            </svg>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                    <div className="eduman-course-img w-img">
                                        <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-06.jpg" alt="course-img"/></a></Link>
                                    </div>
                                    <div className="eduman-course-wraper">
                                        <div className="eduman-course-heading">
                                            <Link href="/course"><a className="course-link-color-4">Health and Fitness</a></Link>
                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                        </div>
                                        <div className="eduman-course-text">
                                            <h3><Link href="/course-details"><a>Become a Super Human: Naturally and Safely Boost Testosterone</a></Link></h3>
                                        </div>
                                        <div className="eduman-course-meta">
                                            <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            </div>
                                            <div className="eduman-course-tutor">
                                                <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-05.png" alt="image not found"/></a></Link>
                                                <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduman-course-footer">
                                        <div className="course-lessson-svg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                            viewBox="0 0 16.471 16.471">
                                            <g id="blackboard-2004" transform="translate(-0.008)">
                                                <path id="Path_1012055" data-name="Path 101"
                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                    fill="#575757" />
                                            </g>
                                            </svg>
                                            <span className="ms-2">12 Lessons</span>
                                        </div>
                                        <div className="course-deteals-btn">
                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="edu-pagination mt-30 mb-20">
                                <ul>
                                <li><a href="#"><i className="fal fa-angle-left"></i></a></li>
                                <li className="active"><a href="#"><span>01</span></a> </li>
                                <li><a href="#"><span>02</span></a></li>
                                <li><a href="#"><i className="fal fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default InstructorProMain;