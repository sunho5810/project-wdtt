let initState = {
    membersList: {},
    modifiedList: {},
    loading: true
}

function memberReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "GET_MEMBER_DATA_REQUEST":
            return {
                ...state,
                loading: true,
            }

        case "GET_MEMBER_DATA_SUCCESS":
            return {
                ...state,
                membersList: payload.data,
                modifiedList: payload.data,
                loading: false,
            }
    
        case "GET_MEMBER_DATA_FAILURE":
            return {
                ...state,
                loading: false,
            }

        /* ------------------------------------------- */

        case "POST_MEMBER_DATA_REQUEST":
            return {
                ...state,
                loading: true,
            }

        case "POST_MEMBER_DATA_SUCCESS":
            return {
                ...state,
            }
    
        case "POST_MEMBER_DATA_FAILURE":
            return {
                ...state,
                loading: false,
            }
    

        default:
            return {...state}
    }

}

export default memberReducer;