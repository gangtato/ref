import ActionType from "../globalActionTypes"

export function userLoginAction<T, V>(user:T, token:V){
    return {
        type: ActionType.USER_LOGIN,
        user,
        token
    }
}

export function userLogoutAction(){
    return {
        type: ActionType.USER_LOGOUT
    }
}