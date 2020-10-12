import React from "react";
import "../styling/LessonTabsComponent.css"

export class LessonTabsComponent extends React.Component {
    render(){
        return(
            <div className="row sticky-header bg-primary">
                <div className="col-4 d-flex align-items-center">
                    <i className="fa fa-times nav-link wbdv-course-editor wbdv-close" aria-hidden="true"></i>
                    <span className="wbdv-course-title text-white font-weight-bold">CS5610 - WebDev</span>
                </div>
                <div className="col-8 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <button className="nav-link wbdv-lesson-tabs link-button">Build</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link wbdv-lesson-tabs link-button" href="#">Page</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link wbdv-lesson-tabs link-button" href="#">Theme</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link wbdv-lesson-tabs link-button" href="#">Store</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link wbdv-lesson-tabs link-button" href="#">Apps</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link wbdv-lesson-tabs link-button" href="#">Setting</button>
                        </li>
                        <button className="nav-link link-button">
                                <i className="fa fa-plus wbdv-lesson-add-btn" aria-hidden="true"></i>
                        </button>
                    </ul>
                </div>
            </div>
        )
    }
}
