let initState = {
    memberList: {}
}

function memberReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "GET_MEMBER_DATA_SUCCESS":
            return {
                ...state,
                memberList: payload.data
            }
    
        default:
            return {...state}
    }

}

export default memberReducer;