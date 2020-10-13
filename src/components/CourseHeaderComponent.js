import React from "react";
import "../styling/CourseHeaderComponent.css"

const CourseHeaderComponent = ({addEventHandler}) =>
    <div>
        <nav className="navbar navbar-dark bg-primary wbdv-sticky-header">
            <span>
                <i className="fa fa-2x fa-align-justify wbdv-field wbdv-hamburger" aria-hidden="true"></i>
                <span className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</span>
            </span>
            <span>
                <input className="form-control mr-sm-2 wbdv-field wbdv-new-course" type="search"
                       placeholder="New Course Title" aria-label="Search" id="newcourseFld"/>
                       <button className="btn btn-outline-light my-2 my-sm-0 wbdv-add-course"
                                onClick={addEventHandler}>ADD</button>
            </span>
        </nav>
    </div>

export default CourseHeaderComponent