import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import CourseTableComponent from "./CourseTableComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";
import {deleteCourse, createCourse, findAllCourses, updateCourse} from "../services/CourseService"
import "../styling/CourseManagerComponent.css"

export class CourseManagerComponent extends React.Component {
    state = {
        courses:[]
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses:courses
                })
            })
    }

    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status =>
                this.setState(prevState =>
                    ({courses:prevState.courses.filter(c => c._id !== course._id)
                    })))
            .catch(error => {
            })
    }

    addCourse = (newCourseTitle) => {
        const newCourse = {
            title: newCourseTitle,
            owner: "me",
            modified: new Date().toDateString()
        }
        createCourse(newCourse)
            .then(actualCourse =>
                this.setState(prevState => ({
                    courses: [
                        ...prevState.courses, actualCourse
                    ]
                })))
    }

    // editCourse = (course) => {
    //     this.setState({
    //         courseEdited: course
    //     })
    // }

    updateCourse = (courseId, newCourse) => {
        this.setState( prevState => ({
            courses: prevState.courses.map(course => course._id === courseId ? newCourse: course)
        }))
    }

    addEventHandler = () => {
        const newCourseTitle = document.getElementById("newcourseFld").value
        this.addCourse(newCourseTitle)
        document.getElementById("newcourseFld").value = ""
    }

    updateEventHandler = (courseId, course) => {
        updateCourse(courseId, course)
            .then(status => {
                this.updateCourse(courseId, course)
    })}

    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Route path={["/","/table"]} exact>
                        <CourseTableComponent courses={this.state.courses}
                                              deleteCourse={this.deleteCourse}
                                              addEventHandler={this.addEventHandler}
                                              updateEventHandler={this.updateEventHandler}/>
                    </Route>
                    <Route path="/grid" exact>
                        <CourseGridComponent courses={this.state.courses}
                                              deleteCourse={this.deleteCourse}
                                              addEventHandler={this.addEventHandler}
                                              updateEventHandler={this.updateEventHandler}/>
                    </Route>
                    <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>
                </div>
            </BrowserRouter>
        )
    }
}