import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import "../styling/WidgetListComponent.css"

const WidgetList = ({widgets=[], topicId, deleteWidget, createWidget, updateWidget, changeWidget}) => {

    const moveUpWidget =(widget, originalOrder) => {
        for(let w of widgets){
            if(w.widgetOrder === (originalOrder - 1)){
                updateWidget(w.id,{...w,widgetOrder:originalOrder})
                break;
            }
        }
        updateWidget(widget.id, {...widget, widgetOrder:originalOrder-1})
    }

    const moveDownWidget = (widget, originalOrder) => {
        for(let w of widgets){
            if(w.widgetOrder === (originalOrder + 1)){
                updateWidget(w.id,{...w,widgetOrder:originalOrder})
                break;
            }
        }
        updateWidget(widget.id, {...widget, widgetOrder:originalOrder+1})
    }

    const orderedWidgetList = widgets.slice().sort((a, b) => a.widgetOrder - b.widgetOrder)

    var minOrder = -1
    var maxOrder = -1

    if (orderedWidgetList.length !== 0) {
        debugger
        minOrder = orderedWidgetList[0].widgetOrder
        maxOrder = orderedWidgetList[orderedWidgetList.length - 1].widgetOrder
    }

    return (
        <div className="widgets">
            <ul className="no-bullets">
                {
                    orderedWidgetList.map(widget =>
                        <li className="widget" key={widget.id}>
                            {
                                widget.type === "Heading" &&
                                <HeadingWidget widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}
                                               changeWidget={changeWidget} moveUpWidget={moveUpWidget}
                                               moveDownWidget={moveDownWidget} minOrder={minOrder} maxOrder={maxOrder}/>
                            }
                            {
                                widget.type === "Paragraph" &&
                                <ParagraphWidget widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}
                                                 changeWidget={changeWidget} moveUpWidget={moveUpWidget}
                                                 moveDownWidget={moveDownWidget} minOrder={minOrder} maxOrder={maxOrder}/>
                            }
                        </li>
                    )
                }
            </ul>
            <i className="fa fa-3x fa-plus-square float-right add-widget" aria-hidden="true"
               onClick={() => createWidget(topicId)}></i>
        </div>
    )
}

export default WidgetList
