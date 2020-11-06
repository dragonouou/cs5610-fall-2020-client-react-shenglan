export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"

export const deleteWidget = (dispatch, widget) =>
    dispatch({type: DELETE_WIDGET, widget: widget})

export const createWidget = (dispatch, newWidget) =>
    dispatch({
        type: CREATE_WIDGET,
        newWidget: newWidget
    })

export const updateWidget = (dispatch, updatedWidget) =>
    dispatch({type: UPDATE_WIDGET, widget:updatedWidget})

export const editWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: {...widget, editing:true}})

export const changeWidget = (dispatch, widget) =>
    dispatch({type: UPDATE_WIDGET, widget: widget})