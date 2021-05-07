import MenuActionType from "../globalActionTypes";

export function getMenuAddContactAction(){
   return{
       type: MenuActionType.MENU_ADD_CONTACT
   }
}

export function getMenuFavoriteAction(){
    return{
        type: MenuActionType.MENU_FAVORITE
    }
}

export function getMenuPhoneBookAction(){
    return{
        type: MenuActionType.MENU_PHONEBOOK
    }
}