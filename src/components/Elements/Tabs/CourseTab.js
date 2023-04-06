import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const CourseTab = () => {
    const courses = useSelector(state => state.courses.courses);
    const [allClasses, setAllClasses] = useState(courses);
    const [sixToEightClasses, setSixToEightClasses] = useState([]);
    const [eightToFourteenClasses, setEightToFourTeenClasses] = useState([]);
    const [thirdTeenToEightTeenClasses, setthirdTeenToEightTeenClasses] = useState([]);
    const mapClasses = () => {
        const class1 = courses.filter((course)=>{
            if(course.tags.includes('6-8')){
                return course;
            }
        })

        const class2 = courses.filter((course)=>{
            if(course.tags.includes('8-14')){
                return course;
            }
        })

        const class3 = courses.filter((course)=>{
            if(course.tags.includes('13-18')){
                return course;
            }
        })
        setSixToEightClasses(class1);
        setEightToFourTeenClasses(class2);
        setthirdTeenToEightTeenClasses(class3);
    }
    useEffect(()=>{
        mapClasses();
    },[])
    console.log('hihi');
    console.log(courses);
    return (
        <section className="course-area p-relative pt-110 pb-90">
         <div className="course-shape-1">
            <img src="/assets/img/shape/portfolio-shap-1.png" alt="shape"/>
         </div>
         <div className="course-shape-2">
            <img src="/assets/img/shape/portfolio-shap-2.png" alt="shape"/>
         </div>
         <div className="course-shape-3">
            <img src="/assets/img/shape/portfolio-shap-3.png" alt="shape"/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xl-5 col-lg-5 f-left">
                  <div className="section-title mb-50">
                     <h2>Khám Phá <br/>  Các <span className="down-mark-line">Khoá Học </span> Đặc Biệt</h2>
                  </div>
               </div>
               <div className="col-xl-7 col-lg-7">
                  <div className="portfolio-button mt-60">
                        <nav>
                            <div className="nav portfolio-button-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Tất Cả<span className="port-red">[06]</span></button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Từ 6 đến 8 tuổi<span className="port-red">[01]</span></button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Từ 8 đến 14 tuổi<span className="port-red">[03]</span></button>
                                <button className="nav-link" id="nav-contact-tabA" data-bs-toggle="tab" data-bs-target="#nav-contactA" type="button" role="tab" aria-controls="nav-contactA" aria-selected="false">Từ 13 đến 18 tuổi<span className="port-red">[01]</span></button>
                            </div>
                        </nav>
                  </div>
               </div>
            </div>
            <div className="course-main-items">
                <div className="tab-content portfolio-tabs-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className='row'>
                            
                            {
                                allClasses && allClasses.map((course) => {
                                    return(
                                        <>
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="eduman-course-main-wrapper mb-30">
                                                    <div className="course-cart">
                                                        <div className="course-info-wrapper">
                                                        <div className="cart-info-body">
                                                            <span className="category-color category-color-1"><Link href="/course"><a>{course.details.language} </a></Link></span>
                                                            <Link href={`/courses/${course.handle}`}><a><h3>{course.title}</h3></a></Link>
                                                            <div className="cart-lavel">
                                                                {/* <h5>Level : <span>Beginner</span></h5> */}
                                                                <p>{course.short_description}</p>
                                                            </div>
                                                            <div className="info-cart-text">
                                                                <ul>
                                                                    {course.key_point && course.key_point.map((p,idx)=>{
                                                                        return(
                                                                            <li key={idx}>
                                                                                <i className="far fa-check"></i>{p}
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <div className="course-action">
                                                                <Link href={`/courses/${course.handle}`}><a className="view-details-btn">Xem Chi Tiết</a></Link>
                                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-thumb w-img">
                                                        <Link href="/course-details"><a><img src={course.image_src} alt="course-img"/></a></Link>
                                                    </div>
                                                    <div className="eduman-course-wraper">
                                                        <div className="eduman-course-heading">
                                                            <Link href="/course"><a className="course-link-color-1">{course.details.language}</a></Link>
                                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                                        </div>
                                                        <div className="eduman-course-text">
                                                            <h3><Link href={`/courses/${course.handle}`}><a>{course.title}</a></Link></h3>
                                                        </div>
                                                        <div className="eduman-course-meta">
                                                        <div className="eduman-course-price">
                                                            <span className="price-now">$47.00 </span>
                                                            <del className="price-old">$75.50</del>
                                                        </div>
                                                        <div className="eduman-course-tutor"><img src="/assets/img/portfilo/course-tutor-01.png"
                                                                alt="image not found"/>
                                                            <Link href="/instructor-profile"><a><span>Danial</span></a></Link>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-footer">
                                                        <div className="course-lessson-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                            viewBox="0 0 16.471 16.471">
                                                            <g id="blackboar09" transform="translate(-0.008)">
                                                                <path id="Path_01" data-name="Path 101"
                                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                                    fill="#575757" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">12 Lessons</span>
                                                        </div>
                                                        <div className="course-deteals-btn">
                                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className='row'>
                        {
                                sixToEightClasses && sixToEightClasses.map((course) => {
                                    return(
                                        <>
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="eduman-course-main-wrapper mb-30">
                                                    <div className="course-cart">
                                                        <div className="course-info-wrapper">
                                                        <div className="cart-info-body">
                                                            <span className="category-color category-color-1"><Link href="/course"><a>{course.details.language} </a></Link></span>
                                                            <Link href={`/courses/${course.handle}`}><a><h3>{course.title}</h3></a></Link>
                                                            <div className="cart-lavel">
                                                                {/* <h5>Level : <span>Beginner</span></h5> */}
                                                                <p>{course.short_description}</p>
                                                            </div>
                                                            <div className="info-cart-text">
                                                                <ul>
                                                                    {course.key_point && course.key_point.map((p,idx)=>{
                                                                        return(
                                                                            <li key={idx}>
                                                                                <i className="far fa-check"></i>{p}
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <div className="course-action">
                                                                <Link href={`/courses/${course.handle}`}><a className="view-details-btn">Xem Chi Tiết</a></Link>
                                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-thumb w-img">
                                                        <Link href="/course-details"><a><img src={course.image_src} alt="course-img"/></a></Link>
                                                    </div>
                                                    <div className="eduman-course-wraper">
                                                        <div className="eduman-course-heading">
                                                            <Link href="/course"><a className="course-link-color-1">{course.details.language}</a></Link>
                                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                                        </div>
                                                        <div className="eduman-course-text">
                                                            <h3><Link href={`/courses/${course.handle}`}><a>{course.title}</a></Link></h3>
                                                        </div>
                                                        <div className="eduman-course-meta">
                                                        <div className="eduman-course-price">
                                                            <span className="price-now">$47.00 </span>
                                                            <del className="price-old">$75.50</del>
                                                        </div>
                                                        <div className="eduman-course-tutor"><img src="/assets/img/portfilo/course-tutor-01.png"
                                                                alt="image not found"/>
                                                            <Link href="/instructor-profile"><a><span>Danial</span></a></Link>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-footer">
                                                        <div className="course-lessson-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                            viewBox="0 0 16.471 16.471">
                                                            <g id="blackboar09" transform="translate(-0.008)">
                                                                <path id="Path_01" data-name="Path 101"
                                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                                    fill="#575757" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">12 Lessons</span>
                                                        </div>
                                                        <div className="course-deteals-btn">
                                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div className='row'>
                        {
                                eightToFourteenClasses && eightToFourteenClasses.map((course) => {
                                    return(
                                        <>
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="eduman-course-main-wrapper mb-30">
                                                    <div className="course-cart">
                                                        <div className="course-info-wrapper">
                                                        <div className="cart-info-body">
                                                            <span className="category-color category-color-1"><Link href="/course"><a>{course.details.language} </a></Link></span>
                                                            <Link href={`/courses/${course.handle}`}><a><h3>{course.title}</h3></a></Link>
                                                            <div className="cart-lavel">
                                                                {/* <h5>Level : <span>Beginner</span></h5> */}
                                                                <p>{course.short_description}</p>
                                                            </div>
                                                            <div className="info-cart-text">
                                                                <ul>
                                                                    {course.key_point && course.key_point.map((p,idx)=>{
                                                                        return(
                                                                            <li key={idx}>
                                                                                <i className="far fa-check"></i>{p}
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <div className="course-action">
                                                                <Link href={`/courses/${course.handle}`}><a className="view-details-btn">Xem Chi Tiết</a></Link>
                                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-thumb w-img">
                                                        <Link href="/course-details"><a><img src={course.image_src} alt="course-img"/></a></Link>
                                                    </div>
                                                    <div className="eduman-course-wraper">
                                                        <div className="eduman-course-heading">
                                                            <Link href="/course"><a className="course-link-color-1">{course.details.language}</a></Link>
                                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                                        </div>
                                                        <div className="eduman-course-text">
                                                            <h3><Link href={`/courses/${course.handle}`}><a>{course.title}</a></Link></h3>
                                                        </div>
                                                        <div className="eduman-course-meta">
                                                        <div className="eduman-course-price">
                                                            <span className="price-now">$47.00 </span>
                                                            <del className="price-old">$75.50</del>
                                                        </div>
                                                        <div className="eduman-course-tutor"><img src="/assets/img/portfilo/course-tutor-01.png"
                                                                alt="image not found"/>
                                                            <Link href="/instructor-profile"><a><span>Danial</span></a></Link>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-footer">
                                                        <div className="course-lessson-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                            viewBox="0 0 16.471 16.471">
                                                            <g id="blackboar09" transform="translate(-0.008)">
                                                                <path id="Path_01" data-name="Path 101"
                                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                                    fill="#575757" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">12 Lessons</span>
                                                        </div>
                                                        <div className="course-deteals-btn">
                                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-contactA" role="tabpanel" aria-labelledby="nav-contact-tabA">
                        <div className='row'>
                        {
                                thirdTeenToEightTeenClasses && thirdTeenToEightTeenClasses.map((course) => {
                                    return(
                                        <>
                                            <div className="col-xl-4 col-lg-4 col-md-6">
                                                <div className="eduman-course-main-wrapper mb-30">
                                                    <div className="course-cart">
                                                        <div className="course-info-wrapper">
                                                        <div className="cart-info-body">
                                                            <span className="category-color category-color-1"><Link href="/course"><a>{course.details.language} </a></Link></span>
                                                            <Link href={`/courses/${course.handle}`}><a><h3>{course.title}</h3></a></Link>
                                                            <div className="cart-lavel">
                                                                {/* <h5>Level : <span>Beginner</span></h5> */}
                                                                <p>{course.short_description}</p>
                                                            </div>
                                                            <div className="info-cart-text">
                                                                <ul>
                                                                    {course.key_point && course.key_point.map((p,idx)=>{
                                                                        return(
                                                                            <li key={idx}>
                                                                                <i className="far fa-check"></i>{p}
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                            <div className="course-action">
                                                                <Link href={`/courses/${course.handle}`}><a className="view-details-btn">Xem Chi Tiết</a></Link>
                                                                <button className="wishlist-btn"><i className="flaticon-like"></i></button>
                                                                <Link href="/course-details"><a className="c-share-btn"><i className="flaticon-previous"></i></a></Link>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-thumb w-img">
                                                        <Link href="/course-details"><a><img src={course.image_src} alt="course-img"/></a></Link>
                                                    </div>
                                                    <div className="eduman-course-wraper">
                                                        <div className="eduman-course-heading">
                                                            <Link href="/course"><a className="course-link-color-1">{course.details.language}</a></Link>
                                                            <span className="couse-star"><i className="fas fa-star"></i>4.9 (25)</span>
                                                        </div>
                                                        <div className="eduman-course-text">
                                                            <h3><Link href={`/courses/${course.handle}`}><a>{course.title}</a></Link></h3>
                                                        </div>
                                                        <div className="eduman-course-meta">
                                                        <div className="eduman-course-price">
                                                            <span className="price-now">$47.00 </span>
                                                            <del className="price-old">$75.50</del>
                                                        </div>
                                                        <div className="eduman-course-tutor"><img src="/assets/img/portfilo/course-tutor-01.png"
                                                                alt="image not found"/>
                                                            <Link href="/instructor-profile"><a><span>Danial</span></a></Link>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="eduman-course-footer">
                                                        <div className="course-lessson-svg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16.471" height="16.471"
                                                            viewBox="0 0 16.471 16.471">
                                                            <g id="blackboar09" transform="translate(-0.008)">
                                                                <path id="Path_01" data-name="Path 101"
                                                                    d="M16,1.222H8.726V.483a.483.483,0,1,0-.965,0v.74H.491A.483.483,0,0,0,.008,1.7V13.517A.483.483,0,0,0,.491,14H5.24L4.23,15.748a.483.483,0,1,0,.836.483L6.354,14H7.761v1.99a.483.483,0,0,0,.965,0V14h1.407l1.288,2.231a.483.483,0,1,0,.836-.483L11.247,14H16a.483.483,0,0,0,.483-.483V1.7A.483.483,0,0,0,16,1.222Zm-.483.965v8.905H.973V2.187Zm0,10.847H.973v-.976H15.514Z"
                                                                    fill="#575757" />
                                                            </g>
                                                        </svg>
                                                        <span className="ms-2">12 Lessons</span>
                                                        </div>
                                                        <div className="course-deteals-btn">
                                                            <Link href="/course-details"><a><span className="me-2">View Details</span><i className="far fa-arrow-right"></i></a></Link>
                                                        </div>
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
            </div>
         </div>
      </section>
    );
};

export default CourseTab;