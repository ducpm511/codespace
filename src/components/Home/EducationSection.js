import React from 'react';
import Link from 'next/link';

const EducationSection = () => {
    return (
        <section className="education-area position-relative pt-85">
         <div className="container">
            <img className="education-shape-2" src="assets/img/shape/education-shape-04.png" alt="shape"/>
            <img className="education-shape-3" src="assets/img/shape/education-shape-01.png" alt="shape"/>
            <img className="education-shape-4" src="assets/img/shape/education-shape-03.png" alt="shape"/>
            <div className="row">
               <div className="col-xl-4 col-lg-4 offset-xl-2 offset-lg-2">
                  <div className="education-img mb-30">
                     <img src="assets/img/teacher/education.png" alt="image not found"/>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4">
                  <div className="section-title mb-30">
                     <h2>Transform Your Life Through <span className="down-mark-line">Education</span></h2>
                  </div>
                  <div className="education-content mb-30">
                     <p>Helping employees gain skills and providing career development often take a back seat to
                        business priorities but workplace.</p>
                     <Link href="/about"><a className="edu-sec-btn">Watch how to start</a></Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default EducationSection;