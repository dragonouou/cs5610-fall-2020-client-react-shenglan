export const deleteModule = (dispatch, module) =>
    dispatch({
        type: "DELETE_MODULE",
        module: module
    })

export const createModule = (dispatch, actualModule) =>
    dispatch({
        type: "CREATE_MODULE",
        module: actualModule
    })

export const updateModule = (dispatch, module) =>
    dispatch({
        type:"UPDATE_MODULE",
        module: {...module, editing:false}
    })

export const editModule = (dispatch, module) =>
    dispatch({
        type:"UPDATE_MODULE",
        module: {...module, editing:true}
    })

export const changeModule = (dispatch, module) =>
    dispatch({
        type:"UPDATE_MODULE",
        module: module
    })

export const selectModule = (dispatch, newmodule) =>
    dispatch ({
        type:"UPDATE_MODULE",
        module: newmodule
    })