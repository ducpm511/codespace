import React, { useState } from "react";
import SignUp from './SignUp';

const HeaderTop = () => {
    const [isActiveF, setActiveF] = useState("false");
    const [signupOpen, setSignUpOpen] = useState(false)

    const handleToggleF = () => {
        setActiveF(!isActiveF);
    };
    return (
        <div className={`header-note-area p-relative d-none d-md-block ${isActiveF ? "danger" : "eduman-header-notice-hide"}`}>
            <div className="container-fluid">
                <div className="note-text text-center">
                    <p>Đăng Ký Ngay và nhận Ưu Đãi Hấp Dẫn từ <span>CodeSpace</span>. Đăng ký <span style={{'cursor': 'pointer'}}  onClick={() => { setSignUpOpen(!signupOpen) }}>tại đây</span>.</p>
                </div>
            </div>
            <div className="eduman-header-notice-action-close">
                <button onClick={handleToggleF}><i className="fal fa-times"></i></button>
            </div>

            <SignUp signupOpen={signupOpen} setSignUpOpen={setSignUpOpen} selectedCourse={''}/>
            <div onClick={() => setSignUpOpen(false)} className={signupOpen ? "offcanvas-overlay overlay-open" : "offcanvas-overlay"}></div>
        </div>
    );
};

export default HeaderTop;