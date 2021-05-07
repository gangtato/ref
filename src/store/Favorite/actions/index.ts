import FavoriteActionType from "../globalActionTypes";


export function AddFavoriteContactAction(status:boolean){
    return{
        type: FavoriteActionType.ADD_FAVORITE,
        status
    }
}

export function MinFavoriteContactAction(status:boolean){
    return{
        type: FavoriteActionType.MIN_FAVORITE,
        status
    }
}