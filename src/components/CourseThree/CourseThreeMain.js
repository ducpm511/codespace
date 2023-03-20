import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Pagination from '../Common/Pagination';
import CourseBar from '../Course/CourseBar';
import ShopSidebar from '../Shop/ShopSidebar';
import Link from 'next/link';

const CourseThreeMain = () => {
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Course 03" breadcrumbSubTitle="Course" />

            <CourseBar />

            <section className="course-content-area pb-90">
                <div className="container">
                    <div className="row mb-10">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                        <ShopSidebar />
                    </div>

                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-01.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-1"><Link href="/course"><a>Development</a></Link></span>
                                            <Link href="/course-details"><a><h3>WordPress Development Course for Plugins and Themes</h3></a></Link>
                                            
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
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
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-01.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-02.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-1"><Link href="/course"><a>Development</a></Link></span>
                                            <Link href="/course-details"><a><h3>Master Google Docs: Free online documents for personal use</h3></a></Link>

                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-wraper">
                                    <div className="eduman-course-heading">
                                        <Link href="/course"><a className="course-link-color-1">Development</a></Link>
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
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-02.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-03.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-3"><Link href="/course"><a>Business</a></Link></span>
                                            <Link href="/course-details"><a><h3>Write Better Emails: Tactics for Smarter Team Communication</h3></a></Link>
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
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
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-03.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-04.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-4"><Link href="/course"><a>Life Style</a></Link></span>
                                            <Link href="/course-details"><a><h3>Become a Super Human: Naturally and Safely Boost</h3></a></Link>
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-wraper">
                                    <div className="eduman-course-heading">
                                        <Link href="/course"><a className="course-link-color-4">Life Style</a></Link>
                                        <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                    </div>
                                    <div className="eduman-course-text">
                                        <h3><Link href="/course-details"><a>Become a Super Human: Naturally and Safely Boost</a></Link></h3>
                                    </div>
                                    <div className="eduman-course-meta">
                                        <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                        </div>
                                        <div className="eduman-course-tutor">
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-02.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-05.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-1"><Link href="/course"><a>Development</a></Link></span>
                                            <Link href="/course-details"><a><h3>Python and Django Full Stack Web Developer Bootcamp</h3></a></Link>
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-wraper">
                                    <div className="eduman-course-heading">
                                        <Link href="/course"><a className="course-link-color-1">Development</a></Link>
                                        <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                    </div>
                                    <div className="eduman-course-text">
                                        <h3><Link href="/course-details"><a>Python and Django Full Stack Web Developer Bootcamp</a></Link></h3>
                                    </div>
                                    <div className="eduman-course-meta">
                                        <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                        </div>
                                        <div className="eduman-course-tutor">
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-03.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-06.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-5"><Link href="/course"><a>Data Science</a></Link></span>
                                            <Link href="/course-details"><a><h3>Data Science Real-Life Data Science Exercises Included</h3></a></Link>
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-wraper">
                                    <div className="eduman-course-heading">
                                        <Link href="/course"><a className="course-link-color-5">Data Science</a></Link>
                                        <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                    </div>
                                    <div className="eduman-course-text">
                                        <h3><Link href="/course-details"><a>Data Science Real-Life Data Science Exercises Included</a></Link></h3>
                                    </div>
                                    <div className="eduman-course-meta">
                                        <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                        </div>
                                        <div className="eduman-course-tutor">
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-04.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-07.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-1"><Link href="/course"><a>Development</a></Link></span>
                                            <Link href="/course-details"><a><h3>Python and Django Full Stack Web Developer Bootcamp</h3></a></Link>
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-wraper">
                                    <div className="eduman-course-heading">
                                        <Link href="/course"><a className="course-link-color-5">Data Science</a></Link>
                                        <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                    </div>
                                    <div className="eduman-course-text">
                                        <h3><Link href="/course-details"><a>Python and Django Full Stack Web Developer Bootcamp</a></Link></h3>
                                    </div>
                                    <div className="eduman-course-meta">
                                        <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                        </div>
                                        <div className="eduman-course-tutor">
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-05.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                <div className="eduman-course-main-wrapper mb-30">
                                <div className="eduman-course-thumb w-img">
                                    <Link href="/course-details"><a><img src="assets/img/portfilo/course-img-08.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <span className="category-color category-color-1"><Link href="/course"><a>Development</a></Link></span>
                                            <Link href="/course-details"><a><h3>Python and Django Full Stack Web Developer Bootcamp</h3></a></Link>
                                            <div className="cart-lavel">
                                            <h5>Level : <span>Beginner</span></h5>
                                            <p>Knowledge is power. Information is liberating. Education is the premise of
                                                progress, in every society, in every family</p>
                                            </div>
                                            <div className="info-cart-text">
                                            <ul>
                                                <li><i className="far fa-check"></i>Scratch to HTML</li>
                                                <li><i className="far fa-check"></i>Learn how to code in Python</li>
                                                <li><i className="far fa-check"></i>Unlimited backend database creation</li>
                                                <li><i className="far fa-check"></i>Adobe XD Tutorials</li>
                                            </ul>
                                            </div>
                                            <div className="course-action">
                                                <Link href="/course-details"><a className="view-details-btn">View Details</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-wraper">
                                    <div className="eduman-course-heading">
                                        <Link href="/course"><a className="course-link-color-5">Data Science</a></Link>
                                        <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                    </div>
                                    <div className="eduman-course-text">
                                        <h3><Link href="/course-details"><a>Python and Django Full Stack Web Developer Bootcamp</a></Link></h3>
                                    </div>
                                    <div className="eduman-course-meta">
                                        <div className="eduman-course-price">
                                            <span className="price-now">$47.00 </span>
                                            <del className="price-old">$75.50</del>
                                        </div>
                                        <div className="eduman-course-tutor">
                                            <Link href="/instructor-profile"><a><img src="assets/img/portfilo/course-tutor-06.png" alt="tutor-img"/></a></Link>
                                            <Link href="/instructor-profile"><a><span>Eduman</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="eduman-course-footer">
                                    <div className="course-lessson-svg">
                                        <i className="fal fa-tv"></i>
                                        <span className="ms-2">12 Lessons</span>
                                    </div>
                                    <div className="course-deteals-btn">
                                        <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseThreeMain;