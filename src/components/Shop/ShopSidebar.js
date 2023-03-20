import React, { useState } from "react";

const ShopSidebar = () => {
    const [isActive, setActive] = useState("false");
    const [isActiveA, setActiveA] = useState("false");
    const [isActiveB, setActiveB] = useState("false");
    const [isActiveC, setActiveC] = useState("false");
    const [isActiveD, setActiveD] = useState("false");
    const [isActiveE, setActiveE] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggleA = () => {
        setActiveA(!isActiveA);
    };
    const handleToggleB = () => {
        setActiveB(!isActiveB);
    };
    const handleToggleC = () => {
        setActiveC(!isActiveC);
    };
    const handleToggleD = () => {
        setActiveD(!isActiveD);
    };
    const handleToggleE = () => {
        setActiveE(!isActiveE);
    };

    return (
        <div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActive ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggle}>Categories</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-bus"/>
                            <label className="edu-check-label" htmlFor="e-bus">Business (12)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-dev"/>
                            <label className="edu-check-label" htmlFor="e-dev">Development (9)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-data"/>
                            <label className="edu-check-label" htmlFor="e-data">Data Science (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-art"/>
                            <label className="edu-check-label" htmlFor="e-art">Arts and Design (10)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-fin"/>
                            <label className="edu-check-label" htmlFor="e-fin">Finance (8)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-mark"/>
                            <label className="edu-check-label" htmlFor="e-mark">Marketing (22)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-per"/>
                            <label className="edu-check-label" htmlFor="e-per">Management (12)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-heal"/>
                            <label className="edu-check-label" htmlFor="e-heal">Health and Fitness (5)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-photo"/>
                            <label className="edu-check-label" htmlFor="e-photo">Photography (18)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-music"/>
                            <label className="edu-check-label" htmlFor="e-music">Music (21)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-acad"/>
                            <label className="edu-check-label" htmlFor="e-acad">Academic (16)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveA ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleA}>Ratings</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-25" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-25">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-24" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-24">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-12" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-12">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                (12)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-28" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-28">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                <i className="fal fa-star"></i>
                                (28)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-14" name="rating"/>
                            <label className="edu-check-star" htmlFor="e-14">
                                <i className="fas fa-star">
                                </i> <i className="fal fa-star">
                                </i> <i className="fal fa-star">
                                </i><i className="fal fa-star">
                                </i><i className="fal fa-star"></i>
                                (14)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveB ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleB}>Price</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-85" name="price"/>
                            <label className="edu-check-label" htmlFor="e-85">All (85)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="e-all" name="price"/>
                            <label className="edu-check-label" htmlFor="e-all">Free (21)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="radio" id="f-all" name="price"/>
                            <label className="edu-check-label" htmlFor="f-all">Paid (54)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveC ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleC}>Level</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-lave"/>
                            <label className="edu-check-label" htmlFor="e-lave">All levels (5)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-beg"/>
                            <label className="edu-check-label" htmlFor="e-beg">Beginner (36)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-inter"/>
                            <label className="edu-check-label" htmlFor="e-inter">Intermediate (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-exp"/>
                            <label className="edu-check-label" htmlFor="e-exp">Expert (32)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveD ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleD}>Language</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-eng"/>
                            <label className="edu-check-label" htmlFor="e-eng">English (21))</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-hin"/>
                            <label className="edu-check-label" htmlFor="e-hin">Hindi (12)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-fren"/>
                            <label className="edu-check-label" htmlFor="e-fren">French (7)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-japa"/>
                            <label className="edu-check-label" htmlFor="e-japa">Japanese (10)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-kore"/>
                            <label className="edu-check-label" htmlFor="e-kore">Korean (5)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-japa"/>
                            <label className="edu-check-label" htmlFor="m-japa">Japanese (10))</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-span"/>
                            <label className="edu-check-label" htmlFor="e-span">Spanish (14)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-ita"/>
                            <label className="edu-check-label" htmlFor="e-ita">Italian (8)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="course-sidebar-widget mb-20">
                <div className={`course-sidebar-info ${isActiveE ? "danger" : "content-hidden"}`}>
                    <h3 className="drop-btn" onClick={handleToggleE}>Duration</h3>
                    <ul>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-less"/>
                            <label className="edu-check-label" htmlFor="e-less">Less than 1 Hours (24)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="e-36"/>
                            <label className="edu-check-label" htmlFor="e-36">1-2 Hours (36)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-25"/>
                            <label className="edu-check-label" htmlFor="m-25">2-5 Hours (25)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-32"/>
                            <label className="edu-check-label" htmlFor="m-32">6-7 Hours (32)</label>
                        </div>
                    </li>
                    <li>
                        <div className="course-sidebar-list">
                            <input className="edu-check-box" type="checkbox" id="m-11"/>
                            <label className="edu-check-label" htmlFor="m-11">7-10 Hours (11)</label>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;