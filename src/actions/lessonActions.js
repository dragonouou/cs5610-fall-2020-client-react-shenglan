
export const createLesson = (dispatch, actualLesson) =>
    dispatch ({
        type:"CREATE_LESSON_FOR_MODULE",
        lesson:actualLesson
    })

export const deleteLesson = (dispatch, lesson) =>
    dispatch ({
        type: "DELETE_LESSON",
        lesson:lesson
    })

export const changeLesson = (dispatch, lesson) =>
    dispatch ({
        type:"UPDATE_LESSON",
        lesson:lesson
    })

export const selectLesson = (dispatch, lesson) =>
    dispatch ({
        type:"UPDATE_LESSON",
        lesson:lesson
    })

export const editLesson = (dispatch, lesson) =>
    dispatch({
        type:"UPDATE_LESSON",
        lesson:lesson
    })

export const updateLesson = (dispatch, lesson) =>
    dispatch({
        type:"UPDATE_LESSON",
        lesson:lesson
    })