import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import SignIn from './SignIn';

const MobileMenu = ({setMenuOpen, menuOpen}) => {

      const [signinOpen, setSingInOpen] = useState(false)

      const [home, setHome] = useState(false)
      const [courses, setcourses] = useState(false)
      const [pages, setPages] = useState(false)
      const [project, setProject] = useState(false)
      const [blog, setBlog] = useState(false)
      const [instructor, setInstructor] = useState(false)
      const [faqs, setFaqs] = useState(false)
      const [zoom, setZoom] = useState(false)
      const [events, setEvents] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(false)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'courses'){
          setHome(false)
          setcourses(!courses)
          setBlog(false)
          setPages(false)
          setProject(false)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'pages'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setProject(false)
          setPages(!pages)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'project'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setPages(false)
          setProject(!project)
          setInstructor(false)
          setFaqs(false)
          setZoom(false)
          setEvents(false)
        }
        else if( menu == 'blog'){
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(false)
            setZoom(false)
            setEvents(false)
        }
        else if( menu == 'instructor'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(!instructor)
            setFaqs(false)
            setZoom(false)
            setEvents(false)
          }
          else if( menu == 'zoom'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(false)
            setZoom(!zoom)
            setEvents(false)
          }
          else if( menu == 'events'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(false)
            setZoom(false)
            setEvents(!events)
          }
          else if( menu == 'faqs'){
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(false)
            setProject(false)
            setInstructor(false)
            setFaqs(!faqs)
            setZoom(false)
            setEvents(false)
          }
      }; 

      return (
        <div className="fix">
        <div className={menuOpen ? "side-info info-open": "side-info"}>
            <div className="side-info-content">
            <div className="offset-widget offset-logo mb-40">
                <div className="row align-items-center">
                    <div className="col-9">
                        <Link href="/"><a><img src="assets/img/logo/logo-black.png" alt="Logo"/></a></Link>
                    </div>
                    <div className="col-3 text-end"><button className="side-info-close" onClick={() => setMenuOpen(false)}><i className="fal fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div className="mm-menu mb-30 d-block d-xl-none">
                <ul>
                  <li className={home ? "has-droupdown active" : "has-droupdown"}>
                    <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                    <ul className={home ? "sub-menu active" : "sub-menu"}>
                        <li><Link href="/"><a>Home Style 1</a></Link></li>
                        <li><Link href="/homeTwo"><a>Home Style 2</a></Link></li>
                        <li><Link href="/homeThree"><a>Home Style 3</a></Link></li>
                    </ul>
                  </li>
                  <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                    <a onClick={() => { openMobileMenu('courses'); }}>Courses</a>
                    <ul className={courses ? "sub-menu active" : "sub-menu"}>
                        <li><Link href="/course"><a>Course 1</a></Link></li>
                        <li><Link href="/course-2"><a>Course 2</a></Link></li>
                        <li><Link href="/course-3"><a>Course 3</a></Link></li>
                        <li><Link href="/course-4"><a>Course 4</a></Link></li>
                        <li><Link href="/course-details"><a>Course Details</a></Link></li>
                    </ul>
                  </li>
                  <li className={project ? "has-droupdown active" : "has-droupdown"}>
                    <a onClick={() => { openMobileMenu('project'); }}>Shop</a>
                    <ul className={project ? "sub-menu active" : "sub-menu"}>
                        <li><Link href="/shop"><a>Shop</a></Link></li>
                        <li><Link href="/shop-details"><a>Shop Details</a></Link></li>
                        <li><Link href="/wishlist"><a>wishlist</a></Link></li>
                        <li><Link href="/cart"><a>cart</a></Link></li>
                        <li><Link href="/checkout"><a>checkout</a></Link></li>
                    </ul>
                  </li>
                  <li className={instructor ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('instructor'); }}>Instructor</a>
                      <ul className={instructor ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/instructor"><a>instructor</a></Link></li>
                          <li><Link href="/instructor-profile"><a>instructor profile</a></Link></li>
                          <li><Link href="/become-instructor"><a>become instructor</a></Link></li>
                      </ul>
                  </li>
                  <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                      <ul className={blog ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/blog"><a>Blog</a></Link></li>
                          <li><Link href="/blog-details"><a>Blog Details</a></Link></li>
                      </ul>
                  </li>
                  <li className={zoom ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('zoom'); }}>zoom class</a>
                      <ul className={zoom ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/zoom-class"><a>zoom class</a></Link></li>
                          <li><Link href="/zoom-class-details"><a>zoom class details</a></Link></li>
                      </ul>
                  </li>
                  <li className={events ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('events'); }}>Event</a>
                      <ul className={events ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/event"><a>Event</a></Link></li>
                          <li><Link href="/event-details"><a>Event Details</a></Link></li>
                      </ul>
                  </li>
                  <li className={faqs ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('faqs'); }}>Faq Page</a>
                      <ul className={faqs ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/faq-page"><a>FAQ page</a></Link></li>
                          <li><Link href="/faq-details"><a>FAQ details</a></Link></li>
                      </ul>
                  </li>
                  <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                    <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                    <ul className={pages ? "sub-menu active" : "sub-menu"}>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/membership"><a>membership plan</a></Link></li>
                        <li><Link href="/404-page"><a>404-page</a></Link></li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="offset-widget offset_searchbar mb-30">
                <div className="menu-search position-relative ">
                    <form action="#" className="filter-search-input">
                        <input type="text" placeholder="Search keyword"/>
                        <button><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="offset-widget offset_menu-top mb-20">
                    <div className="header-menu-top-icon mb-20">
                        <a href="#"><i className="fas fa-phone"></i>(555) 674 890 556</a>
                        <a href="#"><i className="fal fa-envelope"></i>info@example.com</a>
                        <i className="fal fa-map-marker-alt"></i><span>3rd Avenue, San Francisco</span>
                    </div>
                </div>
                <div className="offset-widget button mb-20 d-block d-lg-none">
                    <span className="edu-four-btn" onClick={() => {setSingInOpen(!signinOpen)}}>Enroll now</span>
                </div>
            </div>
        </div>


        <SignIn signinOpen={signinOpen} setSingInOpen={setSingInOpen} />
			<div onClick={() => setSingInOpen(false)} className={signinOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
    </div>
          
    )
}

export default MobileMenu;