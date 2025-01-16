import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import SignUp from './SignUp';

const MobileMenu = ({ setMenuOpen, menuOpen }) => {

  const [signupOpen, setSignUpOpen] = useState(false)

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

    if (menu == 'home') {
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
    else if (menu == 'courses') {
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
    else if (menu == 'pages') {
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
    else if (menu == 'project') {
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
    else if (menu == 'blog') {
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
    else if (menu == 'instructor') {
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
    else if (menu == 'zoom') {
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
    else if (menu == 'events') {
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
    else if (menu == 'faqs') {
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
      <div className={menuOpen ? "side-info info-open" : "side-info"}>
        <div className="side-info-content">
          <div className="offset-widget offset-logo mb-40">
            <div className="row align-items-center">
              <div className="col-9">
                <Link href="/"><a><img className='logoImg' src="/assets/img/logo/logo-vertical.png" alt="codespace logo" /></a></Link>
              </div>
              <div className="col-3 text-end"><button className="side-info-close" onClick={() => setMenuOpen(false)}><i className="fal fa-times"></i></button>
              </div>
            </div>
          </div>
          <div className="mm-menu mb-30 d-block d-xl-none">
            <ul>
              <li className={'home'}>
                <a onClick={() => { openMobileMenu('home'); }}>Trang Chủ</a>

              </li>
              <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('courses'); }}>Khoá Học</a>
                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/khoa-hoc/scratch-co-ban"><a>Scratch Cơ Bản</a></Link></li>
                  <li><Link href="/khoa-hoc/scratch-nang-cao"><a>Scratch Nâng Cao</a></Link></li>
                  <li><Link href="/khoa-hoc/python-co-ban"><a>Python Cơ Bản</a></Link></li>
                  <li><Link href="/khoa-hoc/python-nang-cao"><a>Python Nâng Cao</a></Link></li>
                </ul>
              </li>
              <li>
                <Link href="https://blog.codespace.edu.vn"><a>Blog</a></Link>
              </li>
              <li>
                <Link href="/gioi-thieu"><a>Giới Thiệu</a></Link>
              </li>
              <li>
                <Link href="/lien-he"><a>Liên Hệ</a></Link>
              </li>
              {/* <li className={instructor ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('instructor'); }}>Instructor</a>
                      <ul className={instructor ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/instructor"><a>instructor</a></Link></li>
                          <li><Link href="/instructor-profile"><a>instructor profile</a></Link></li>
                          <li><Link href="/become-instructor"><a>become instructor</a></Link></li>
                      </ul>
                  </li> */}

            </ul>
          </div>
          {/* <div className="offset-widget offset_searchbar mb-30">
                <div className="menu-search position-relative ">
                    <form action="#" className="filter-search-input">
                        <input type="text" placeholder="Search keyword"/>
                        <button><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div> */}
          <div className="offset-widget offset_menu-top mb-20">
            <div className="header-menu-top-icon mb-20">
              <a href="tel:(+84) 345612838"><i className="fas fa-phone"></i>(+84) 03456 12 838</a>
              <a href="mailto:rex@codespace.edu.vn"><i className="fal fa-envelope"></i>huyenhn@codespace.edu.vn</a>
              <i className="fal fa-map-marker-alt"></i><span>62-64 Nguyễn Thị Định, P. Phước Nguyên, TP Bà Rịa, BR-VT</span>
              <br/>
            </div>
          </div>
          <div className="offset-widget button mb-20 d-block d-lg-none">
            <span className="edu-four-btn" onClick={() => { setSignUpOpen(!signupOpen) }}>Đăng Ký Học Thử</span>
          </div>
        </div>
      </div>


      <SignUp signupOpen={signupOpen} setSignUpOpen={setSignUpOpen} selectedCourse={''} />
      <div onClick={() => setSignUpOpen(false)} className={signupOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
    </div>

  )
}

export default MobileMenu;