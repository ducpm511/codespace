import React from 'react';
import Link from 'next/link';

const BrowserCourseSection = () => {
    return (
        <div className="browser-course-area">
         <div className="container">
            <div className="row">
               <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                  <div className="browser-course-wrapper course-height">
                     <div className="browser-course-bg">
                        <img src="assets/img/browser-course/browser-course-01.jpg" alt="image not found"/>
                     </div>
                     <div className="browser-course-content">
                        <span>Start from today</span>
                        <div className="browser-course-tittle">
                           <Link href="/instructor"><a>Become an instructor and spread your knowledge</a></Link>
                        </div>
                        <div className="browser-btn">
                           <Link href="/become-instructor"><a className="course-btn">View details</a></Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-6 col-md-12 mb-30">
                  <div className="browser-course-wrapper course-height">
                     <div className="browser-course-bg">
                        <img src="assets/img/browser-course/browser-course-02.jpg" alt="image not found"/>
                     </div>
                     <div className="row">
                        <div className="col-xl-7 col-lg-7">
                           <div className="browser-course-content">
                              <span>Discover your gain</span>
                              <div className="browser-course-tittle">
                                    <Link href="/course-details"><a>Keep your skilled centers of excellence competitive</a></Link>
                              </div>
                              <div className="browser-btn">
                                 <Link href="/course"><a className="course-btn">Browse courses</a></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default BrowserCourseSection;