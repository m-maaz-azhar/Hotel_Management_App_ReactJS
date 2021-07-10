const INITIAL_STATE = {
    
}

const reducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })
        case "GETALLHOTELS":
            return ({
                ...state,
                allHotels: action.allHotels
            })
        default:
            return state
    }
}

export default reducer;