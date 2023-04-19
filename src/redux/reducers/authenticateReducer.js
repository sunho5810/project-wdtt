let initState = {
    authenticate: true
}

function authenticateReducer(state = initState, action){
    let {type, paylond} = action;

    switch (type) {
        case "AUTHENTICATE_SUCCESS":
            return {
                ...state,
                authenticate: true
            }
        case "AUTHENTICATE_FAIL":
            return {
                ...state,
                authenticate: false
            }
    
        default:
            return {...state}
    }
}

export default authenticateReducer;