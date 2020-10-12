import React from "react";
import "../styling/TopicPillsComponent.css"

export class TopicPillsComponent extends React.Component {
    render(){
        return(
                <div>
                    <ul className="nav nav-pills wbdv-topic-pill-list">
                        <li className="nav-item bg-secondary wbdv-topic-pill">
                            <button className="nav-link link-button" href="#">Topic 1</button>
                        </li>
                        <li className="nav-item bg-secondary wbdv-topic-pill">
                            <button className="nav-link link-button" href="#">Topic 2</button>
                        </li>
                        <li className="nav-item bg-secondary wbdv-topic-pill">
                            <button className="nav-link link-button" href="#">Topic 3</button>
                        </li>
                        <li className="nav-item bg-secondary wbdv-topic-pill">
                            <button className="nav-link link-button" href="#">Topic 4</button>
                        </li>
                        <li className="nav-item bg-secondary wbdv-topic-pill">
                            <button className="nav-link link-button wbdv-topic-add-btn" href="#">
                                <i className="fa fa-plus " aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </div>
        )
    }
}