import React from "react";

export class ModuleList extends React.Component {
    render(){
        return (
            <div className="col-4 left-panel">
                <ul className="list-group wbdv-module-list">
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 1 - JQuery</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item active">
                        <span className="wbdv-module-item-title">Modules 2 - React</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 3 - Redux</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 4 - Native</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 5 - Angular</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 6 - Node</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 7 - Mongo</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Modules 8 - MySQL</span>
                        <span className="wbdv-module-item-delete-btn">
                        <i className="fa fa-times float-right" aria-hidden="true"></i>
                    </span>
                    </li>
                </ul>
                <i className="fa fa-2x fa-plus float-right wbdv-module-item-add-btn" aria-hidden="true"></i>
            </div>
        )
    }
}