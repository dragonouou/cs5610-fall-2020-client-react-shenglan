const initialState = {
    // courses:[],
    course: {
        _id:"123",
        title:"TEST course"
    }
}

const courseReducer = (state=initialState,action) => {
    switch(action.type)  {
        case "SET_COURSES":
            return {...state, course:action.course}
        default:
            return state
    }
}

export default courseReducer