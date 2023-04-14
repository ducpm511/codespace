import React from 'react';

const FeatureSection = () => {
    return (
        <div className="features-area pt-45 pb-15" style={{background:"url(/assets/img/fact/fact.png)"}}>
         <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="features-wrapper d-flex align-items-center mb-30">
                     <div className="features-icon">
                        <i className="flaticon-online-course"></i>
                     </div>
                     <div className="features-content">
                        <h3>Đội ngũ chuyên gia giàu kinh nghiệm</h3>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="features-wrapper d-flex align-items-center mb-30">
                     <div className="features-icon">
                        <i className="flaticon-certificate"></i>
                     </div>
                     <div className="features-content">
                        <h3>Hoàn thành khoá học và nhận chứng chỉ</h3>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="features-wrapper d-flex align-items-center mb-30">
                     <div className="features-icon">
                        <i className="flaticon-laptop"></i>
                     </div>
                     <div className="features-content">
                        <h3>Thời gian học tập linh động</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
};

export default FeatureSection;