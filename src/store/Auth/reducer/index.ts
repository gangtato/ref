import ActionType from '../globalActionTypes';

let localauth:any = localStorage.getItem("auth");
let initialState = localStorage.getItem("auth") ? JSON.parse(localauth) : {user: null, token: null}

export default function reducer(state = initialState, action:any){
    switch(action.type){
        case ActionType.USER_LOGIN:
            return{
                user: action.user,
                token: action.token
            }
        case ActionType.USER_LOGOUT:
            return{
                user: null,
                token: null
            }
        default:
            return state;
    }
}