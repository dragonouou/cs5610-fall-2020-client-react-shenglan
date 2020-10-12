import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import '../styling/CourseTableComponent.css'
import {Link} from "react-router-dom";
import CourseHeaderComponent from "./CourseHeaderComponent";


class CourseTableComponent extends React.Component {

    state = {
        newCourseTitle:[]
    }


    render() {
        return (
            <div>
                <CourseHeaderComponent addCourse={this.props.addCourse}/>

                <div className="wbdv-table">
                <table className="table">
                    <thead>
                    <tr>
                        <th className="wbdv-header wbdv-title">Title</th>
                        <th className="wbdv-header wbdv-owner d-none d-md-table-cell">Owner by</th>
                        <th className="wbdv-header wbdv-last-modified d-none d-md-table-cell">Last modified by me</th>
                        <th>
                            <Link to="/grid">
                                <i className="fa fa-th wbdv-button wbdv-grid-layout" aria-hidden="true"></i>
                            </Link>
                            <i className="fa fa-sort-alpha-asc wbdv-header wbdv-sort" aria-hidden="true"></i></th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.courses.map(course =>
                        <CourseRowComponent
                            key={course._id}
                            deleteCourse={this.props.deleteCourse}
                            updateCourse={this.props.updateCourse}
                            course = {course}/>
                    )
                    }
                    </tbody>
                </table>
                    <i className="fa fa-plus-circle fa-3x float-right wbdv-button wbdv-sticky-add-course"
                       aria-hidden="true" onClick={()=>{
                           const newCourseTitle = document.getElementById("newcourseFld").value
                           this.props.addCourse(newCourseTitle)
                           document.getElementById("newcourseFld").value = ""
                    }}></i>
                </div>
            </div>
        )
    }
}

// const CourseTableComponent = () =>
//     <div>
//         <nav className="navbar navbar-dark bg-primary wbdv-sticky-header">
//             <div>
//                 <i className="fa fa-2x fa-align-justify wbdv-field wbdv-hamburger" aria-hidden="true"></i>
//                 <a className="navbar-brand wbdv-label wbdv-course-manager">Course Manager</a>
//             </div>
//             <form className="form-inline">
//                 <input className="form-control mr-sm-2 wbdv-field wbdv-new-course" type="search"
//                        placeholder="New Course Title" aria-label="Search"/>
//                     <button className="btn btn-outline-light my-2 my-sm-0 wbdv-button wbdv-add-course"
//                             type="submit">Add Course
//                     </button>
//             </form>
//         </nav>
//         <table className="table table-striped">
//             {courses.map(item =>
//                 <CourseTableComponent item={item}/>
//                 )
//             }
//         </table>
//     </div>

// <i className="fa fa-list wbdv-button wbdv-list-layout" aria-hidden="true"></i>
export default CourseTableComponent