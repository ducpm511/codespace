import React from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Pagination from '../Common/Pagination';
import CourseBar from '../Course/CourseBar';
import ShopSidebar from '../Shop/ShopSidebar';
import Link from 'next/link';

const CourseTwoMain = () => {
    return (
        <main>
            <Breadcrumb breadcrumbTitle="Course 02" breadcrumbSubTitle="Course" />

            <CourseBar />

            <section className="course-content-area pb-90">
                <div className="container">
                    <div className="row mb-10">
                    <div className="col-xl-3 col-lg-4 col-md-12">
                        <ShopSidebar />
                    </div>

                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-01.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$12.57</span>
                                            <del>$24.50</del>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Python and Django Full Stack Web Developer Bootcamp</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>1:33 Min</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-02.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-3">Business</a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>free</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Write Better Emails: Tactics for Smarter Team Communication</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>1:33 Min</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-03.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$12.57</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Data Science Real-Life Data Science Exercises Included</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>1:33 Min</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-04.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
                                            <Link href="/course-details"><a><h3>MySQL Database : Beginner SQL Database Design</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$147.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>MySQL Database : Beginner SQL Database Design</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-05.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$21.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Python and Django Full Stack Web Developer Bootcamp</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-06.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
                                            <Link href="/course-details"><a><h3>Basics for Beginners: Learn C# Fundamentals by Coding</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$12.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Basics for Beginners: Learn C# Fundamentals by Coding</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-07.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color">Live Style</a></Link>
                                            <Link href="/course-details"><a><h3>Become a Super Human: Naturally and Boost Testosterone</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$48.00</span>
                                            <del>$24.50</del>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Become a Super Human: Naturally and Boost Testosterone</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-08.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-3">Business</a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>free</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Python and Django Full Stack Web Developer Bootcamp</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-09.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
                                            <Link href="/course-details"><a><h3>Machine Learning Hands-On Python and R In Data Science</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$29.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Machine Learning Hands-On Python and R In Data Science</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-10.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
                                            <Link href="/course-details"><a><h3>Understanding Java Script 2022 Edition</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>free</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Understanding Java Script 2022 Edition</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-11.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
                                            <Link href="/course-details"><a><h3>Python for Financial Analysis and Algorithmic Trading</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>57.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Python for Financial Analysis and Algorithmic Trading</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-12.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-1">Development</a></Link>
                                            <Link href="/course-details"><a><h3>Python for Financial Analysis and Algorithmic Trading</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$15.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Python for Financial Analysis and Algorithmic Trading</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-13.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-3">Business</a></Link>
                                            <Link href="/course-details"><a><h3>Master Google Docs Free online documents for personal use</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$42.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Master Google Docs Free online documents for personal use</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-14.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-3">Business</a></Link>
                                            <Link href="/course-details"><a><h3>Spring and Hibernate for Beginners Spring Social Boot</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>$37.00</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Spring and Hibernate for Beginners Spring Social Boot</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="protfolio-course-2-wrapper mb-30">
                                <div className="student-course-img">
                                    <Link href="/course-details"><a><img src="assets/img/course/course-15.jpg" alt="course-img"/></a></Link>
                                </div>
                                <div className="course-cart">
                                    <div className="course-info-wrapper">
                                        <div className="cart-info-body">
                                            <Link href="/course"><a className="category-color category-color-3">Business</a></Link>
                                            <Link href="/course-details"><a><h3>Accounting Financial Total Beginners to Advanced</h3></a></Link>
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
                                <div className="portfolio-course-2-content">
                                    <div className="portfolio-course-wrapper">
                                        <div className="portfolio-price">
                                            <span>free</span>
                                        </div>
                                        <div className="portfolio-course-2">
                                            <h3><Link href="/course-details"><a>Accounting Financial Total Beginners to Advanced</a></Link></h3>
                                        </div>
                                        <div className="course-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fal fa-star"></i>
                                            <span>(25)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-2-footer">
                                    <div className="coursee-clock">
                                        <i className="flaticon-clock"></i><span>4 Years</span>
                                    </div>
                                    <div className="course-creadit">
                                        <i className="flaticon-menu-1"></i><span>8 Credit</span>
                                    </div>
                                    <div className="course-network">
                                        <i className="fal fa-signal mr-10"></i><span>Fresh</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12'>
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

export default CourseTwoMain;