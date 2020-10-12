import React from "react";

export class WidgetListComponent extends React.Component{
    render(){
        return (
            <div className="widget">
                <h3>Heading widget
                    <span className="float-right">
                        <button href="#" className="btn btn-warning">
                            <i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                        <button href="#" className="btn btn-warning">
                            <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                        <select id="widget-selection">
                            <option>Heading</option>
                            <option>YouTube</option>
                            <option>Slides</option>
                            <option>Image</option>
                            <option>List</option>
                        </select>
                        <button href="#" className="btn btn-danger">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        </span>
                </h3>
                <br/>
                    <input className="form-control" placeholder="Heading text"/>
                        <br/>
                            <select className="form-control" id="heading-number">
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                                <option>Heading 3</option>
                                <option>Heading 4</option>
                                <option>Heading 5</option>
                                <option>Heading 6</option>
                            </select>
                            <br/>
                                <input className="form-control" placeholder="Widget name"/>
                                    <br/>
                                    <h3>Preview</h3>
                                    <h2>Heading text</h2>
            </div>
        )
    }
}