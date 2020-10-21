import courseService from "../services/CourseService";
import moduleService from "../services/ModuleService";
import lessonService from "../services/LessonService";
import topicService from "../services/TopicService";
import {connect} from "react-redux";
import {CourseEditorComponent} from "../components/CourseEditorComponent";
import {findModulesForCourse, findTopicForLesson, findLessonForModule,
    findCourseById,clearTopics} from "../actions/courseEditorActions";

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course,
})


const propertyToDispatchMapper = (dispatch) => ({
    findCourseById: (courseId) =>
        courseService.findCourseById(courseId)
            .then(actualCourse =>
                findCourseById(dispatch,actualCourse)),

    findModulesForCourse:(courseId) =>
        moduleService.findModulesForCourse(courseId)
            .then(actualModules =>
                findModulesForCourse(dispatch,actualModules)),

    findLessonForModule:(moduleId) =>
        lessonService.findLessonForModule(moduleId)
            .then(lessons =>
                findLessonForModule(dispatch, lessons, moduleId)),

    findTopicForLesson: (lessonId) =>
        topicService.findTopicForLesson(lessonId)
            .then(topics =>
                findTopicForLesson(dispatch, topics, lessonId)),

    clearTopics:() => clearTopics(dispatch)
})

export default connect
(stateToPropertyMapper,propertyToDispatchMapper)
(CourseEditorComponent)
