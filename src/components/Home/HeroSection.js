import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
      <section className="slider-area hero-height position-relative fix" style={{background:"url(/assets/img/slider/herro_banner.png)"}}>
         <img className="shape-3 d-none d-xxl-block" src="/assets/img/shape/shape-03.png" alt="image not found"/>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-9">
                  <div className="hero-text pt-95">
                     <h5>Khơi nguồn cảm hứng công nghệ cho thế hệ trẻ</h5>
                     <h2><span className="down-mark-line">Khám phá</span> các Khoá học Lập trình và Kỹ năng Công nghệ</h2>
                     <p>CodeSpace cung cấp các khóa học lập trình Scratch, Python và Kỹ năng công nghệ cho trẻ em, thanh thiếu niên </p>
                     <div className="hero-btn">
                        <Link href="/khoa-hoc"><a className="edu-btn">Khám Phá Ngay</a></Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="hero-right position-relative">
                     <img data-depth="0.2" className="shape shape-1" src="/assets/img/shape/shape-01.png" alt="shape"/>
                     <img data-depth="0.2" className="shape-2" src="/assets/img/shape/shape-02.png" alt="shape"/>
                     <img className="shape-6" src="/assets/img/shape/slider-shape-6.png" alt="shape"/>
                     <div className="shape-4">
                        <img className="" src="/assets/img/shape/shape-04.png" alt="shape"/>
                        <h5 className="hero-shape-text">Học với Chuyên gia trong lĩnh vực</h5>
                     </div>
                     <div className="shape-5">
                        <div className="course-card">
                           <img src="/assets/img/shape/slider-card-1.png" alt="image not found"/>
                           <img src="/assets/img/shape/slider-card-2.png" alt="image not found"/>
                           <img src="/assets/img/shape/slider-card-3.png" alt="image not found"/>
                           <img src="/assets/img/shape/slider-card-4.png" alt="image not found"/>
                           <span><i className="far fa-plus"></i></span>
                        </div>
                        <h5>Hơn <span>10,000+</span> giờ kinh nghiệm đào tạo nhân sự CNTT</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default HeroSection;