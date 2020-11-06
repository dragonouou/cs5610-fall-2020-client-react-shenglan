import {DELETE_WIDGET,CREATE_WIDGET,UPDATE_WIDGET} from "../actions/widgetActions";

const initialState = {
    widgets: [],
    topicId:[],
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [...state.widgets, action.newWidget
            ]}
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget),
            }
        case DELETE_WIDGET:
            return {
                ...state,
                widgets:state.widgets.filter(widget => widget !== action.widget)
            }
        case "CLEAR_WIDGETS":
            return {
                ...state,
                widgets:[]
            }
        default:
            return state;
    }
}

export default widgetReducer