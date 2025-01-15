import React from 'react';


const CourseCurriculam = ({curriculum}) => {
    return (
        <div className="course-curriculum pt-40 pb-50">
            <div className="course-curriculam">
                <h4>Chương trình đào tạo</h4>
            </div>
            {/* <ul>
                <li>15 lectures • 2h 29m 12s total length</li>
            </ul> */}
            <div className="course-curriculam-accodion mt-30">
                <div className="accordion" id="accordionExample">
                                        {
                        curriculum.map((c,idx)=>{
                            return(
                                <>
                                    <div className="accordion-item">
                                        <div className="accordion-body" id={`heading${idx}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${idx}`} aria-expanded="true"
                                                aria-controls={`collapse${idx}`}>
                                                <span className="accordion-header">
                                                    <span className="accordion-tittle">
                                                        <span>{c.chapterName}</span>
                                                    </span>
                                                    <span className="accordion-tittle-inner">
                                                        <span>{c.lessons.length} bài học</span>
                                                    </span>
                                                </span>
                                            </button>
                                        </div>
                                        <div id={`collapse${idx}`} className="accordion-collapse collapse"
                                            aria-labelledby={`heading${idx}`} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                
                                               {
                                                c.lessons.map((l,index)=>{
                                                    return(
                                                    <div key={index} className="course-curriculum-content d-sm-flex justify-content-between align-items-center">
                                                        <div className="course-curriculum-info">
                                                            <i className="flaticon-youtube"></i>
                                                            <h4>{l}</h4>
                                                        </div>
                                                        {/* <div className="course-curriculum-meta">
                                                            <span>5:30</span>
                                                            <span className="time"> <i className="flaticon-lock"></i></span>
                                                        </div> */}
                                                    </div>
                                                    )
                                                })
                                               }
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default CourseCurriculam;