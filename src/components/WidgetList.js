import React from "react";
import {connect} from "react-redux";

const WidgetList = ({widgets=[], deleteWidget, createWidget, updateWidget, editWidget,okWidget}) =>
    <div>
        <ul>
            {
                widgets.map(widget =>
                <li>
                    <button onClick={()=> editWidget(widget)}>Edit</button>
                    <button onClick={() => deleteWidget(widget)}>DELETE</button>
                    {
                        widget.editing &&
                        <input onChange = {(e) =>
                            updateWidget({
                                ...widget, name: e.target.value
                            })}
                               value = {widget.name}/>
                    }
                    {   !widget.editing &&
                        <span>{widget.name}</span>
                    }
                    <button onclick = {() => okWidget(widget)}>OK</button>
                </li>
                )
            }
        </ul>
        <button onClick={createWidget}>ADD</button>
    </div>

export default WidgetList