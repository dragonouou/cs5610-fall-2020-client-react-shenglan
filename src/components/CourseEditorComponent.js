import React from "react";
import {findCourseById} from "../services/CourseService";
import '../styling/CourseEditorComponent.css'
import ModuleListContainer from "../containers/ModuleListContainer";
import LessonContainer from "../containers/LessonTabsContainer";
import TopicPillsContainer from "../containers/TopicPillsContainer";
import {Link} from "react-router-dom";
import WidgetListContainer from "../containers/WidgetListContainer";


export class CourseEditorComponent extends React.Component {

    // state = {
    //     course:[]
    // }

    componentDidMount() {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        if (moduleId){
            this.props.findLessonForModule(moduleId)
        }
        if (lessonId){
            this.props.findTopicForLesson(lessonId)
        }
        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId
        if(moduleId !== prevProps.match.params.moduleId){
            if(moduleId) {
                this.props.findLessonForModule(moduleId)
                this.props.clearTopics()
                this.props.clearWidgets()
            }
        }
        if (lessonId){
            if(lessonId !== prevProps.match.params.lessonId){
                this.props.findTopicForLesson(lessonId)
                this.props.clearWidgets()
            }
        }
        if (topicId){
            if(topicId !== prevProps.match.params.topicId){
                this.props.findWidgetsForTopic(topicId)
            }
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row sticky-header bg-primary">
                    <div className="col-4 d-flex align-items-center">
                        <Link className="fa fa-times nav-link wbdv-course-editor wbdv-close"
                           aria-hidden="true" to={`/table`}></Link>
                        <span className="wbdv-course-title text-white font-weight-bold">
                            Web Dev {this.props.course.title}
                        </span>
                    </div>
                    <div className="col-8 d-flex align-items-center"></div>
                </div>

                <div className="row sticky-body">
                    <div className="col-4 left-panel">
                        <ModuleListContainer/>
                    </div>
                    <div className="col-8 right-panel">
                        <LessonContainer/>
                        <TopicPillsContainer/>
                        <WidgetListContainer/>
                    </div>
                </div>
            </div>
        )
    }
}