const initialState = {
    modules:[]
}

const moduleReducer = (state=initialState,action) => {
    switch (action.type){
        case "DELETE_MODULE":
            return {...state,
                modules: state.modules.filter(module => module._id !== action.module._id)
            }
        case "CREATE_MODULE":
            return {
                ...state,
                modules:[...state.modules, action.module]
            }
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules:action.modules
            }
        case "UPDATE_MODULE":
            return {
                ...state,
                modules:state.modules.map(module =>
                    module._id === action.module._id ? action.module : module)
            }
        default:
            return state;

    }
}

export default moduleReducer