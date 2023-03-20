import React from 'react';
import Link from 'next/link';

const StudentChooseSection = () => {
    return (
        <div className="student-choose-area fix pt-120 pb-110">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5">
                  <div className="student-wrapper">
                     <div className="section-title mb-30">
                        <h2>Why Students <span className="down-mark-line">Choose</span> Us for Gain Their Knowledge</h2>
                     </div>
                     <div className="sitdent-choose-content">
                        <p>Helping employees gain skills and providing career development often take a back seat to
                           business priorities but workplace better right now. Seventy percent of workers think that.
                        </p>
                     </div>
                     <div className="student-choose-list">
                        <ul>
                           <li><i className="fas fa-check-circle"></i>Free for physically handcraft </li>
                           <li><i className="fas fa-check-circle"></i>Easy to enroll courses</li>
                           <li><i className="fas fa-check-circle"></i>Course certificate for particular course</li>
                        </ul>
                     </div>
                     <div className="student-btn">
                        <Link href="/about"><a className="edu-sec-btn">More about us</a></Link>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-lg-2">
                  <div className="student-wrapper position-relative">
                     <div className="shap-01">
                     </div>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5">
                  <div className="student-choose-wrapper position-relative">
                     <div className="shap-02">
                     </div>
                     <div className="shap-03">
                        <img src="assets/img/shape/student-shape-03.png" alt="image not found"/>
                     </div>
                     <div className="shap-04">
                        <img src="assets/img/shape/student-shape-04.png" alt="image not found"/>
                     </div>
                     <div className="shap-05">
                        <img src="assets/img/shape/student-shape-05.png" alt="image not found"/>
                     </div>
                     <div className="shap-06">
                        <img src="assets/img/shape/student-shape-06.png" alt="image not found"/>
                     </div>
                     <div className="shap-07">
                        <img src="assets/img/shape/student-shape-07.png" alt="image not found"/>
                     </div>
                     <div className="student-choose-thumb">
                        <img src="assets/img/student-choose/student.png" alt="image not found"/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default StudentChooseSection;