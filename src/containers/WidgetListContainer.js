import React from "react";
import {connect} from "react-redux";
import WidgetList from "../components/WidgetList"
import {deleteWidget,createWidget,updateWidget,changeWidget} from "../actions/widgetActions";
import widgetService from "../services/WidgetService"

const stateToPropertyMapper = (state) => ({
    widgets:state.widgetReducer.widgets,
    topicId:state.widgetReducer.topicId,
})

const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) =>
        widgetService.deleteWidget(widget.id)
            .then(status => deleteWidget(dispatch,widget)),

    createWidget: (topicId) =>
        widgetService.createWidget(topicId,
            {type:"Heading",topicId:topicId, size:1})
            .then(actualWidget => createWidget(dispatch, actualWidget)),

    updateWidget: (widgetId, newWidget) =>
        widgetService.updateWidget(widgetId, newWidget)
            .then(status => updateWidget(dispatch, newWidget)),

    changeWidget:(widget) => changeWidget(dispatch, widget),

})

export default connect
(stateToPropertyMapper,propertyToDispatchMapper)
(WidgetList)