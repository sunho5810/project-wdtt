let initState = {

}

function memberReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "":
            return {
                ...state
            }
    
        default:
            return {...state}
    }

}