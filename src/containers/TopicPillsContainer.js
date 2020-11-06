import topicService from "../services/TopicService";
import {changeTopic, createTopic, deleteTopic, editTopic, updateTopic, selectTopic}
        from "../actions/topicActions";
import {connect} from "react-redux";
import TopicPillsComponent from "../components/TopicPillsComponent";

const stateToPropertyMapper = (state) => ({
    course:state.courseReducer.course,
    moduleId:state.lessonReducer.moduleId,
    lessonId:state.topicReducer.lessonId,
    topics:state.topicReducer.topics

})

const propertyToDispatchMapper = (dispatch) => ({
    createTopic: (lessonId) =>
        topicService.createTopicForLesson(lessonId, {
            title: "New Topic"
        }).then(actualTopic => createTopic(dispatch,actualTopic)),

    deleteTopic: (topic) =>
        topicService.deleteTopic(topic._id)
            .then(status => deleteTopic(dispatch, topic)),

    changeTopic: (topic) => changeTopic(dispatch, topic),

    selectTopic: (topic) => selectTopic(dispatch, topic),

    editTopic: (topic) =>
        topicService.updateTopic(topic._id,{
            ...topic, editing:true
        }).then(updatedtopic => editTopic(dispatch, {
            ...topic, editing:true
        })),

    updateTopic:(topic) =>
        topicService.updateTopic(topic._id,{
            ...topic, editing:false
        }).then(updatedtopic => updateTopic(dispatch, {
            ...topic, editing:false
        })),
})

export default connect
(stateToPropertyMapper,propertyToDispatchMapper)
(TopicPillsComponent)