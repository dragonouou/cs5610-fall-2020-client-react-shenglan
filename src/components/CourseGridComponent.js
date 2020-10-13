import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import "../styling/CourseGridComponent.css"
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import CourseHeaderComponent from "./CourseHeaderComponent";


export default class CourseGridComponent extends React.Component {
    state = {
        newCourse:[]
    }

    render(){
        return (
            <div className="wbdv-course-grid">
                <CourseHeaderComponent addEventHandler={this.props.addEventHandler}/>

                <div className="wbdv-grid">
                    <div className="wbdv-grid-header">
                        <span>Recent documents</span>
                        <span className="float-right">
                        <div className="dropdown d-inline-block">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                owned by me
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Action</button>
                                <button className="dropdown-item" type="button">Another action</button>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                        <Link to="/table"><i className="fa fa-list wbdv-button wbdv-list-layout" aria-hidden="true"></i></Link>
                        <i className="fa fa-sort-alpha-asc wbdv-header wbdv-sort" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="wbdv-card">
                    <Row>
                        {this.props.courses.map(course =>
                            <CourseCardComponent
                                deleteCourse={this.props.deleteCourse}
                                updateEventHandler={this.props.updateEventHandler}
                                course = {course}/>
                        )
                        }
                    </Row>
                    </div>
                </div>
                <i className="fa fa-plus-circle fa-3x float-right wbdv-button wbdv-sticky-add-course"
                   aria-hidden="true" onClick={this.props.addEventHandler}></i>
            </div>
        )
    }
}