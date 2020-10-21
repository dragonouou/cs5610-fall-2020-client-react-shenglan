import moduleService from "../services/ModuleService";
import {connect} from "react-redux";
import ModuleListComponent from "../components/ModuleListComponent";
import {deleteModule, createModule, updateModule, editModule, changeModule, selectModule}
        from "../actions/moduleListActions"

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    course:state.courseReducer.course,
})

const propertyToDispatchManager = (dispatch) => ({
    deleteModule: (module) =>
        moduleService.deleteModule(module._id)
            .then(status => deleteModule(dispatch,module)),

    createModule: (course) =>
        moduleService.createModuleForCourse(course._id, {
            title: "New Module"
        }).then(actualModule => createModule(dispatch,actualModule)),

    updateModule: (module) =>
        moduleService.updateModule(module._id,{
            ...module, editing:false
        }).then(updatedmodule => updateModule(dispatch, module)),

    editModule: (module) =>
        moduleService.updateModule(module._id,{
            ...module, editing:true
        }).then(updatedmodule => editModule(dispatch, module)),

    changeModule:(module) => changeModule(dispatch, module),

    selectModule:(module) => selectModule(dispatch, module)
})

export default connect
(stateToPropertyMapper,
    propertyToDispatchManager)
(ModuleListComponent)