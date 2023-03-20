import React from 'react';

const HeroSectionTwo = () => {
    return (
        <div className="hero-area hero-height d-flex align-items-center position-relative">
            <img className="hero-shape-5" src="assets/img/shape/shape-02.png" alt="shape"/>
            <img className="hero-shape-1" src="assets/img/shape/shape-03.png" alt="shape"/>
            <img className="hero-shape-6" src="assets/img/shape/shape-01.png" alt="shape"/>
            <img className="hero-shape-7" src="assets/img/shape/shape-10.png" alt="shape"/>
            <div className="hero-shap-5 d-none d-xxl-block">
                <div className="hero-card">
                    <img src="assets/img/shape/slider-card-1.png" alt="image not found"/>
                    <img src="assets/img/shape/slider-card-2.png" alt="image not found"/>
                    <img src="assets/img/shape/slider-card-3.png" alt="image not found"/>
                    <img src="assets/img/shape/slider-card-4.png" alt="image not found"/>
                    <span><i className="far fa-plus"></i></span>
                </div>
                <h5>More than <span>21,500+</span> students
                    enrolled around the world
                </h5>
            </div>
            <div className="container">
                <div className="hero-2-content-wrpapper position-relative">
                    <div className="hero-shape-3 d-none d-xl-block">
                        <img className="" src="assets/img/shape/shape-04.png" alt="image not found"/>
                        <h5 className="slider-shap-text">Top Rated
                            Instructors</h5>
                    </div>
                    <div className="hero-shape-2 d-none d-xl-block">
                        <img src="assets/img/shape/shape-09.png" alt="shape"/>
                    </div>
                    <div className="hero-shape-4 d-none d-lg-block">
                        <img src="assets/img/shape/shape-8.png" alt="shape"/>
                    </div>
                    <div className="hero-thumb-01 d-none d-xl-block">
                        <img src="assets/img/slider/hero-01.png" alt="shape"/>
                    </div>
                    <div className="hero-thumb-02 d-none d-lg-block">
                        <img src="assets/img/slider/hero-02.png" alt="shape"/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-10">
                            <div className="slider-content-wrapper">
                                <div className="hero-tittle-info text-center mb-45">
                                    <h2>Build Your Own Online<br/>
                                        Platform <span className="down-mark-line-2">Eduman</span></h2>
                                </div>
                                <div className="slider-search ">
                                    <form action="#">
                                        <div className="slider-search-icon position-relative">
                                            <input type="text" placeholder="Search courses..."/>
                                            <button type="submit"><i className="far fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="slider-course-content text-center">
                                    <ul>
                                        <li><i className="fas fa-check-circle"></i><span>Free for physically handcraft
                                            </span></li>
                                        <li><i className="fas fa-check-circle"></i><span>Course certificate</span></li>
                                        <li><i className="fas fa-check-circle"></i><span>Easy to enroll courses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionTwo;