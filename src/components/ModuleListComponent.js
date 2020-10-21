import React from "react";
import {Link} from "react-router-dom";

const ModuleListComponent = ({
    course={},modules=[],deleteModule,createModule,updateModule,editModule,changeModule,selectModule
}) =>
    <div>
        <ul className="list-group wbdv-module-list">
            {modules.map(module => {

                let classNameForList = "list-group-item wbdv-module-item"
                let classNameForLink = ""
                if(module.selected) {
                    classNameForList += " highlight-module-topic"
                    classNameForLink += " highlight-text-white"
                }

                return (
                    <li className={classNameForList} key={module._id}>
                        {
                            module.editing &&
                            <span>
                            <input onChange={(e) => (changeModule({
                                ...module, title: e.target.value}))}
                                   value={module.title}/>
                            <i className="fa fa-check-square-o float-right" aria-hidden="true"
                               onClick={()=>updateModule(module)}></i>
                            <i className="fa fa-trash float-right wbdv-trash" aria-hidden="true"
                               onClick={()=>deleteModule(module)}></i>
                            </span>
                        }
                        {
                            !module.editing &&
                            <span>
                            <Link onClick={()=>selectModule({
                                ...module, selected:!module.selected
                            })} className={classNameForLink}
                                  to={`/edit/course/${course._id}/modules/${module._id}`}>{module.title}</Link>
                            <i className="fa fa-pencil float-right" aria-hidden="true"
                               onClick={()=>editModule(module)}></i></span>
                        }
                    </li>
                )
            }

            )}
        </ul>
        <i className="fa fa-2x fa-plus float-right wbdv-module-item-add-btn" aria-hidden="true"
           onClick={()=> createModule(course)}></i>
    </div>

export default ModuleListComponent

