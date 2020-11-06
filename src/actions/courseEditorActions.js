export const findCourseById = (dispatch,actualCourse) =>
    dispatch({
        type: "SET_COURSES",
        course:actualCourse
    })

export const findModulesForCourse = (dispatch,actualModules) =>
    dispatch ({
        type:"FIND_MODULES_FOR_COURSE",
        modules:actualModules
    })

export const findLessonForModule = (dispatch,lessons,moduleId) =>
    dispatch ({
        type:"FIND_LESSONS_FOR_MODULE",
        lessons:lessons,
        moduleId:moduleId
    })

export const findTopicForLesson = (dispatch, topics, lessonId) =>
    dispatch ({
        type:"FIND_TOPICS_FOR_LESSON",
        topics:topics,
        lessonId:lessonId
    })

export const findWidgetsForTopic = (dispatch, widgets, topicId) =>
    dispatch ({
        type:"FIND_WIDGETS_FOR_TOPIC",
        widgets,
        topicId
    })

export const clearTopics = (dispatch) =>
    dispatch ({
        type:"CLEAR_TOPICS",
    })

export const clearWidgets = (dispatch) =>
    dispatch ({
        type:"CLEAR_WIDGETS",
    })
