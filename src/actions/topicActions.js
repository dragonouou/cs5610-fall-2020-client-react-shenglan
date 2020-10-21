
export const createTopic = (dispatch, actualTopic) =>
    dispatch ({
        type:"CREATE_TOPIC_FOR_LESSON",
        topic:actualTopic
    })

export const deleteTopic = (dispatch, topic) =>
    dispatch ({
        type: "DELETE_TOPIC",
        topic:topic
    })

export const changeTopic = (dispatch, topic) =>
    dispatch ({
        type:"UPDATE_TOPIC",
        topic:topic
    })

export const editTopic = (dispatch, topic) =>
    dispatch({
        type:"UPDATE_TOPIC",
        topic:topic
    })

export const updateTopic = (dispatch, topic) =>
    dispatch({
        type:"UPDATE_TOPIC",
        topic:topic
    })

export const selectTopic = (dispatch, newtopic) =>
    dispatch({
        type:"UPDATE_TOPIC",
        topic:newtopic
    })