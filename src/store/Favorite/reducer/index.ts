import FavoriteActionType from "../globalActionTypes";

let initialState:any = {
    statusState: true
}

export default function reducer(state = initialState, action:any){
    switch(action.type){
        case FavoriteActionType.ADD_FAVORITE:
            return{
                ...state,
                statusState: true
            }
        case FavoriteActionType.MIN_FAVORITE:  
        default:
            return{
                ...state,
                statusState: false
            }
    }
}