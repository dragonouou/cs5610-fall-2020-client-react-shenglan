import React from "react";

const ImageWidget = ({widget,updateWidget,deleteWidget,changeWidget,moveUpWidget,moveDownWidget,
                        minOrder,maxOrder}) => {
    const widgetOrder = widget.widgetOrder

    return (
        <div>
            {
                widget.editing &&
                <div>
                    <div>
                        <h3 className="widget-inline">Image widget</h3>
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

                    <label htmlFor="imageURL"></label>
                    <input className="form-control" id="imageURL" placeholder="Image URL" onChange={
                        (e)=> changeWidget({...widget,src:e.target.value})}
                           value={widget.src}/>
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
            <img src={widget.src} alt="no image url" width={widget.width} height={widget.height}/>
        </div>
    )
}

export default ImageWidget