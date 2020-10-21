const topicUrl = "https://wbdv-generic-server.herokuapp.com/api/shengou/topics"
const lessonUrl = "https://wbdv-generic-server.herokuapp.com/api/shengou/lessons"

export const findTopicForLesson = (lessonId) =>
    fetch(`${lessonUrl}/${lessonId}/topics`)
        .then(response => response.json())

export const createTopicForLesson = (lessonId, newTopic) =>
    fetch(`${lessonUrl}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type":"application/json"
        }
    })
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch (`${topicUrl}/${topicId}`, {
        method:"DELETE"
    }).then(response => response.json())


export const updateTopic = (topicId, newTopic) =>
    fetch(`${topicUrl}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(newTopic),
        headers: {
            "content-type":"application/json"
        }
    })
        .then(response => response.json())


export default {findTopicForLesson,createTopicForLesson,deleteTopic,updateTopic}