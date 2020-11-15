import React from "react";

const ListWidget = ({widget,updateWidget,deleteWidget,changeWidget,moveUpWidget,moveDownWidget,
                        minOrder,maxOrder}) => {

    const widgetOrder = widget.widgetOrder

    if (widget.text === null){
        var itemList = []
    } else {
        itemList = widget.text.split(/\r?\n/)
    }

    return (
        <div>
            {
                widget.editing &&
                <div>
                    <div>
                        <h3 className="widget-inline">List widget</h3>
                        <span className="float-right">
                        {
                            widget.widgetOrder !== minOrder &&
                            <i className="fa fa-arrow-up btn btn-primary arrow" aria-hidden="true" onClick={()=>
                                moveUpWidget(widget,widgetOrder)}></i>
                        }
                        {
                            widget.widgetOrder !== maxOrder &&
                            <i className="fa fa-arrow-down btn btn-primary arrow" aria-hidden="true" onClick={()=>
                                moveDownWidget(widget,widgetOrder)}></i>
                        }
                        <select id="widget-selection" onChange={()=> updateWidget(widget.id,{...widget,
                            type:document.getElementById("widget-selection").value})} value={widget.type}>
                            <option selected>choose widget type</option>
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Hyperlink</option>
                            <option>Video</option>
                        </select>
                        <i className="fa fa-trash btn btn-danger arrow" aria-hidden="true"
                           onClick={()=> deleteWidget(widget)}></i>
                        </span>
                    </div>

                    <div className="float-right">
                        <button className="btn btn-primary btn-sm arrow"
                                onClick={()=> updateWidget(widget.id,{...widget,editing:false})}>Save</button>
                        <span className="custom-control custom-switch widget-inline">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                           checked={false}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Preview</label></span>
                    </div>

                    <label htmlFor="listText"></label>
                    <textarea className="form-control" id="listText" placeholder="Enter one list item per line"
                              onChange={(e)=>
                                  changeWidget({...widget,text:e.target.value})} value={widget.text}/>
                    <br/>
                    <select className="form-control" id="orderedList" onChange={()=> changeWidget(
                        {...widget,ordered:document.getElementById("orderedList").value === "true"})}
                            value={widget.ordered?"true":"false"}>
                        <option value="false" selected>Unordered list</option>
                        <option value="true">Ordered list</option>
                    </select>
                    <label htmlFor="listName"></label>
                    <input className="form-control" id="listName" placeholder="Widget name"
                           onChange={(e)=> changeWidget({...widget,name:e.target.value})}
                           value={widget.name}/>
                    <h3>Preview</h3>
                </div>
            }
            {
                !widget.editing &&
                <div className="float-right">
                    <button className="btn btn-primary btn-sm arrow"
                            onClick={()=> updateWidget(widget.id,{...widget,editing:true})}>Edit</button>
                    <span className="custom-control custom-switch widget-inline">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1"
                           checked={true}/>
                       <label className="custom-control-label" htmlFor="customSwitch1">Preview</label></span>
                </div>
            }
            {
                widget.ordered &&
                    <div>
                        <ol>
                            {
                                itemList.map(item =>
                                    <li>{item}</li>)
                            }
                        </ol>
                    </div>
            }
            {
                !widget.ordered &&
                    <div>
                        <ul>
                            {
                                itemList.map(item =>
                                    <li>{item}</li>)
                            }
                        </ul>
                    </div>
            }
        </div>
    )
}

export default ListWidget