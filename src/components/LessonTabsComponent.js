import React from "react";
import "../styling/LessonTabsComponent.css"
import {Link} from "react-router-dom";

const LessonTabsComponent = ({course, moduleId, lessons=[], createLesson, deleteLesson, updateLesson,
                                 changeLesson, editLesson,selectLesson}) =>
    <div>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson => {

                    let classNameForList = "nav-item";
                    let classNameForLink = ""
                    if(lesson.selected) {
                        classNameForList += " highlight-lesson"
                        classNameForLink += " highlight-text-black"
                    }

                    return (
                        <li className={classNameForList} key={lesson._id}>
                            {
                                lesson.editing &&
                                <span className="nav-link">
                                <input value={lesson.title} className="wbdv-lesson"
                                       onChange={(e)=> changeLesson({
                                           ...lesson, title: e.target.value
                                       })}/>
                                <i className="fa fa-check-square-o float-right" aria-hidden="true"
                                   onClick={()=> updateLesson(lesson)}></i>
                                <i className="fa fa-trash float-right" aria-hidden="true"
                                   onClick={()=> deleteLesson(lesson)}></i>
                                </span>
                            }
                            {
                                !lesson.editing &&
                                <span className="nav-link">
                                <Link className={classNameForLink} onClick={()=> selectLesson({
                                    ...lesson, selected:!lesson.selected
                                })}
                                    to={`/edit/course/${course._id}/modules/${moduleId}/lessons/${lesson._id}`}>
                                    {lesson.title}</Link>
                                <i className="fa fa-pencil float-right" aria-hidden="true"
                                   onClick={()=> editLesson(lesson)}></i>
                                </span>
                            }
                        </li>
                    )
                })
            }
            <li className="nav-item">
                <a className="nav-link fa fa-plus wbdv-lesson-add-btn" href="#"
                   onClick={() => createLesson(moduleId)}></a>
            </li>
        </ul>
    </div>

export default LessonTabsComponent


// export class LessonTabsComponent extends React.Component {
//     render(){
//         return(
//             <div className="row sticky-header bg-primary">
//                 <div className="col-4 d-flex align-items-center">
//                     <i className="fa fa-times nav-link wbdv-course-editor wbdv-close" aria-hidden="true"></i>
//                     <span className="wbdv-course-title text-white font-weight-bold">CS5610 - WebDev</span>
//                 </div>
//                 <div className="col-8 d-flex align-items-center">
//                     <ul className="nav">
//                         <li className="nav-item">
//                             <button className="nav-link wbdv-lesson-tabs link-button">Build</button>
//                         </li>
//                         <li className="nav-item">
//                             <button className="nav-link wbdv-lesson-tabs link-button" href="#">Page</button>
//                         </li>
//                         <li className="nav-item">
//                             <button className="nav-link wbdv-lesson-tabs link-button" href="#">Theme</button>
//                         </li>
//                         <li className="nav-item">
//                             <button className="nav-link wbdv-lesson-tabs link-button" href="#">Store</button>
//                         </li>
//                         <li className="nav-item">
//                             <button className="nav-link wbdv-lesson-tabs link-button" href="#">Apps</button>
//                         </li>
//                         <li className="nav-item">
//                             <button className="nav-link wbdv-lesson-tabs link-button" href="#">Setting</button>
//                         </li>
//                         <button className="nav-link link-button">
//                                 <i className="fa fa-plus wbdv-lesson-add-btn" aria-hidden="true"></i>
//                         </button>
//                     </ul>
//                 </div>
//             </div>
//         )
//     }
// }
