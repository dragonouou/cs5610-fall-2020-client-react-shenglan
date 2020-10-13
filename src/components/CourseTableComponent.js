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
                <CourseHeaderComponent addEventHandler={this.props.addEventHandler}/>

                <div className="wbdv-table">
                <table className="table">
                    <thead>
                    <tr>
                        <th className="wbdv-header wbdv-title">Title</th>
                        <th className="wbdv-header wbdv-owner d-none d-md-table-cell">Owner by</th>
                        <th className="wbdv-header wbdv-last-modified d-none d-lg-table-cell">Last modified by me</th>
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
                            updateEventHandler={this.props.updateEventHandler}
                            course = {course}/>
                    )
                    }
                    </tbody>
                </table>

                <i className="fa fa-plus-circle fa-3x float-right wbdv-button wbdv-sticky-add-course"
                   aria-hidden="true" onClick={this.props.addEventHandler}></i>
                </div>
            </div>
        )
    }
}

export default CourseTableComponent