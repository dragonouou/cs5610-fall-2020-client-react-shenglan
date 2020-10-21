import lessonService from "../services/LessonService";
import {connect} from "react-redux";
import {createLesson, deleteLesson, changeLesson, editLesson, updateLesson,selectLesson}
    from "../actions/lessonActions";
import LessonTabsComponent from "../components/LessonTabsComponent";


const stateToPropertyMapper = (state) => ({
    lessons:state.lessonReducer.lessons,
    moduleId:state.lessonReducer.moduleId,
    course:state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({
    createLesson: (moduleId) =>
        lessonService.createLessonForModule(moduleId, {
            title:"New Lesson"
        }).then(actualLesson => createLesson(dispatch,actualLesson)),

    deleteLesson: (lesson) =>
        lessonService.deleteLesson(lesson._id)
            .then(status => deleteLesson(dispatch, lesson)),

    changeLesson: (lesson) => changeLesson(dispatch, lesson),

    selectLesson: (newLesson) => selectLesson(dispatch, newLesson),

    editLesson: (lesson) =>
        lessonService.updateLesson(lesson._id,{
            ...lesson, editing:true
        }).then(updatedlesson => editLesson(dispatch, {
            ...lesson, editing:true
        })),

    updateLesson:(lesson) =>
        lessonService.updateLesson(lesson._id,{
            ...lesson, editing:false
        }).then(updatedlesson => updateLesson(dispatch, {
            ...lesson, editing:false
        })),
})

export default connect
(stateToPropertyMapper,propertyToDispatchMapper)
(LessonTabsComponent)