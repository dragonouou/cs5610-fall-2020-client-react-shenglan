import React from "react";
import {findCourseById} from "../services/CourseService";
import {ModuleListComponent} from "./ModuleListComponent";
import {LessonTabsComponent} from "./LessonTabsComponent";
import {TopicPillsComponent} from "./TopicPillsComponent";
import '../styling/CourseEditorComponent.css'
import {WidgetListComponent} from "./WidgetListComponent";

class CourseEditorComponent extends React.Component {

    state = {
        course:[]
    }

    componentDidMount() {
        // console.log(this.props.match.params.courseId)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse =>
                this.setState({course:actualCourse})
            )
    }

    render() {
        return (
            <div className="container">
                <LessonTabsComponent/>
                <div className="row sticky-body">
                    <ModuleListComponent/>
                    <div className="col-8 right-panel">
                        <TopicPillsComponent/>
                        <WidgetListComponent/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditorComponent