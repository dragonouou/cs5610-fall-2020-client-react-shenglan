import React from "react";

const ParagraphWidget = ({widget,updateWidget,deleteWidget,changeWidget,moveUpWidget,moveDownWidget,
                             minOrder,maxOrder}) => {
    const widgetOrder = widget.widgetOrder
    return (
        <div>
            {
                widget.editing &&
                <div>
                    <div>
                        <h3 className="widget-inline">Paragraph widget</h3>
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
                            type:document.getElementById("widget-selection").value})}
                                value={widget.type}>
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

                    <label htmlFor="paragraphText"></label>
                    <textarea className="form-control" id="paragraphText" placeholder="Lorem ipsum" onChange={
                        (e)=> changeWidget({...widget,text:e.target.value})}
                           value={widget.text}/>
                    <label htmlFor="paragraphName"></label>
                    <input className="form-control" id="paragraphName" placeholder="Widget name"
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
                widget.size === 1 &&
                <h1>{widget.text}</h1>
            }
            {
                widget.size === 2 &&
                <h2>{widget.text}</h2>
            }
            {
                widget.size === 3 &&
                <h3>{widget.text}</h3>
            }
        </div>
    )
}

export default ParagraphWidget