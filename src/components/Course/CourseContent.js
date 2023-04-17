import React, { useEffect, useReducer, useState } from 'react';
import Pagination from '../Common/Pagination';
import ShopSidebar from '../Shop/ShopSidebar';
import Link from 'next/link';

const CourseContent = ({filters, selectedFilters, courses}) => {
   const [selectedFacets, setSelectedFacets] = useState(selectedFilters)
   const initCoursesData = courses;
   
   const courseReducer = (coursesState, selectedFilterList) => {
      const filteredCourses = coursesState.filter((course)=>{
         const array = course.tags.filter((tag)=>{
            if(selectedFilterList.includes(tag)){
               return tag;
            }
         })
         if(array.length > 0){
            return course;
         }
      })
      return selectedFilterList.length > 0 ? filteredCourses : courses
   }
   const [coursesState, dispatchCourses] = useReducer(courseReducer, initCoursesData)

    return (
        <section className="course-content-area pb-90 pt-90">
         <div className="container">
            <div className="row mb-10">
               <div className="col-xl-3 col-lg-4 col-md-12">
                  <ShopSidebar filters={filters} selectedFilters={selectedFacets} setSelectedFilters={setSelectedFacets} dispatchCourses={dispatchCourses}/>
               </div>
               <div className="col-xl-9 col-lg-8 col-md-12">
                  <div className="row">
                     {
                        coursesState && coursesState.map((course, idx) =>{
                           return(
                              <div className="col-xl-4 col-lg-6 col-md-6" key={`course-${idx}`}>
                                 <div className="course-wrapper-2 mb-30">
                                    <div className="student-course-img">
                                       <img src={course.image_src} alt={course.title}/>
                                    </div>
                                    <div className="course-cart">
                                       <div className="course-info-wrapper">
                                          <div className="cart-info-body">
                                             <Link href="/khoa-hoc"><a className="category-color category-color-1">{course.details.language}</a></Link>
                                             <Link href={`/khoa-hoc/${course.handle}`}><a><h3>{course.title}</h3></a></Link>
                                             <div className="cart-lavel">
                                                <p>{course.short_description}</p>
                                             </div>
                                             <div className="info-cart-text">
                                                <ul>
                                                   {course.key_point && course.key_point.map((p, idx) => {
                                                      return (
                                                         <li key={`point-${idx}`}>
                                                               <i className="far fa-check"></i>{p}
                                                         </li>
                                                      )
                                                   })}
                                                </ul>
                                             </div>
                                             <div className="course-action">
                                                <Link href={`/khoa-hoc/${course.handle}`}><a className="view-details-btn">Xem Chi Tiết</a></Link>
                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                <Link href={`/khoa-hoc/${course.handle}`}><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="student-course-footer">
                                       <div className="student-course-linkter">
                                          <div className="course-lessons">
                                             <i className="fal fa-tv"></i>
                                             <span className="ms-2">{course.details.duration} buổi</span>
                                          </div>
                                          <div className="portfolio-price">
                                             <span>{course.details.mode}</span>
                                             {/* <del>$24.50</del> */}
                                          </div>
                                       </div>
                                       <div className="student-course-text">
                                          <h3><Link href={`/khoa-hoc/${course.handle}`}><a>{course.title}</a></Link></h3>
                                          
                                       </div>
                                       <div className="portfolio-user">
                                          {/* <div className="user-icon">
                                             <Link href="/instructor-profile"><a><i className="fas fa-user"></i>Bravo</a></Link>
                                          </div> */}
                                          <div className="course-icon">
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             <i className="fas fa-star"></i>
                                             {/* <span>(25)</span> */}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </div>
                  {/* <div className="row">
                     <div className='col-12'>
                         <Pagination />
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </section>
    );
};

export default CourseContent;