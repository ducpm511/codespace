import React from 'react';

const StepJourneySection = () => {
    return (
        <div className="step-journey-area pt-110 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="section-title text-center mb-45">
                     <h2>How to <span className="down-mark-line-2">Start</span> Your Journey</h2>
                  </div>
               </div>
               <div className="col-xxl-12">
                  <ul className="nav nav-tabs step-journey justify-content-center" id="myTab" role="tablist">
                     <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                           type="button" role="tab" aria-controls="home" aria-selected="true">Quick Register</button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                           type="button" role="tab" aria-controls="profile" aria-selected="false">Set
                           Curriculam</button>
                     </li>
                     <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                           type="button" role="tab" aria-controls="contact" aria-selected="false">Launch Course</button>
                     </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="step-tab-content pt-60 mb-30">
                           <div className="row">
                              <div className="col-xl-6 col-lg-6">
                                 <div className="step-journey-box mb-30">
                                    <div className="srep-journey-content mt-30">
                                       <h4>01. Record your video</h4>
                                       <p>Helping employees gain skills and providing development often take a back seat
                                          to business priorities workplace. We offer fresh courses on emerging topics.
                                       </p>
                                    </div>
                                    <div className="step-journey-content">
                                       <h4>02. Record your video</h4>
                                       <p>Learn Programming Languages to have a strong emphasis on functional
                                          programming. You can study any of the courses present below and get the
                                          complete.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                 <div className="step-journey-thumb d-flex-align-items-center">
                                    <img src="assets/img/bg/step-journey-1.png" alt="step-journey"/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="step-tab-content pt-60 mb-30">
                           <div className="row">
                              <div className="col-xl-6 col-lg-6">
                                 <div className="step-journey-box mb-30">
                                    <div className="srep-journey-content mt-30">
                                       <h4>01. Do a short list</h4>
                                       <p>Helping employees gain skills and providing development often take a back seat
                                          to business priorities workplace. We offer fresh courses on emerging topics.
                                       </p>
                                    </div>
                                    <div className="step-journey-content">
                                       <h4>02. How we help you</h4>
                                       <p>Learn Programming Languages to have a strong emphasis on functional
                                          programming. You can study any of the courses present below and get the
                                          complete.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                 <div className="step-journey-thumb d-flex-align-items-center">
                                    <img src="assets/img/bg/step-journey-2.png" alt="step-journey"/>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="step-tab-content pt-60 mb-30">
                           <div className="row">
                              <div className="col-xl-6 col-lg-6">
                                 <div className="step-journey-box mb-30">
                                    <div className="srep-journey-content mt-30">
                                       <h4>01. Select category</h4>
                                       <p>Helping employees gain skills and providing development often take a back seat
                                          to business priorities workplace. We offer fresh courses on emerging topics.
                                       </p>
                                    </div>
                                    <div className="step-journey-content">
                                       <h4>02. How we help you</h4>
                                       <p>Learn Programming Languages to have a strong emphasis on functional
                                          programming. You can study any of the courses present below and get the
                                          complete.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-lg-6">
                                 <div className="step-journey-thumb d-flex-align-items-center">
                                    <img src="assets/img/bg/step-journey-3.png" alt="step-journey"/>
                                 </div>
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

export default StepJourneySection;