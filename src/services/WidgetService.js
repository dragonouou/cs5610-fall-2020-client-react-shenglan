const widgetUrl = "http://localhost:8080/api/widgets"
const topicUrl = "http://localhost:8080/api/topics"
// const widgetUrl = "https://warm-atoll-00004.herokuapp.com/api/widgets"
// const topicUrl = "https://warm-atoll-00004.herokuapp.com/api/topics"

const findAllWidgets = () =>
    fetch(widgetUrl)
        .then(response => response.json())

const findWidgetsForTopic = (topicId) =>
    fetch(`${topicUrl}/${topicId}/widgets`)
        .then(response => response.json())

const createWidget = (topicId, newTopic) =>
    fetch(`${topicUrl}/${topicId}/widgets`, {
        method:"POST",
        body:JSON.stringify(newTopic),
        headers:{
            "content-type":"application/json"
        }
    }).then(response => response.json())

const updateWidget = (widgetId, newWidget) =>
    fetch(`${widgetUrl}/${widgetId}`,{
        method:"PUT",
        body:JSON.stringify(newWidget),
        headers:{
            "content-type":"application/json"
        }
    }).then(response => response.json())

const deleteWidget = (widgetId) =>
    fetch(`${widgetUrl}/${widgetId}`,{
        method:"DELETE"
    })


export default {findAllWidgets,createWidget,findWidgetsForTopic,updateWidget,deleteWidget}