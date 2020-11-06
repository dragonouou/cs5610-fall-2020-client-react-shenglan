import React from "react";
import "../styling/TopicPillsComponent.css"
import {Link} from "react-router-dom";


const TopicPillsComponent = ({course, moduleId, lessonId, topics=[], createTopic, deleteTopic, updateTopic,
    changeTopic, editTopic, selectTopic}) =>
    <div>
        <ul className="nav nav-pills">
            {
                topics.map(topic => {
                    let classNameForList = "nav-item"
                    let classNameForLink = ""
                    if(topic.selected) {
                        classNameForList += " highlight-module-topic"
                        classNameForLink += " highlight-text-white"
                    }

                    return (
                    <li className={classNameForList} key={topic._id}>
                    {
                        topic.editing &&
                        <span className="nav-link">
                    <input value={topic.title}
                           onChange={(e)=> changeTopic({
                               ...topic, title: e.target.value
                           })}/>
                    <i className="fa fa-check-square-o float-right" aria-hidden="true"
                       onClick={()=> updateTopic(topic)}></i>
                    <i className="fa fa-trash float-right" aria-hidden="true"
                       onClick={()=> deleteTopic(topic)}></i>
                    </span>
                    }
                    {
                        !topic.editing &&
                        <span className="nav-link">
                        <Link className={classNameForLink} onClick={()=>selectTopic({
                            ...topic,selected:!topic.selected})} to=
                            {`/edit/course/${course._id}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}>
                            {topic.title}
                        </Link>
                        <i className="fa fa-pencil float-right" aria-hidden="true"
                           onClick={()=> editTopic(topic)}></i>
                    </span>
                    }
                    </li>
                    )
                })

            }
            <li className="nav-item">
                <a className="nav-link fa fa-plus wbdv-lesson-add-btn" href="#"
                   onClick={() => createTopic(lessonId)}></a>
            </li>
        </ul>
    </div>


export default TopicPillsComponent


