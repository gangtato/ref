import MenuActionType from '../globalActionTypes';

let initialState:any = {
    stateMenu: "PhoneList"
}

export default function reducer(state = initialState, action:any){
   switch(action.type){
       case MenuActionType.MENU_PHONEBOOK:
           return{
              ...state,
              stateMenu:"PhoneList"
           } 
       case MenuActionType.MENU_FAVORITE:
           return{
              ...state,
              stateMenu:"Favorite"
           }
       case MenuActionType.MENU_ADD_CONTACT:
           return{
             ...state,
             stateMenu:"PhoneAdd"
           }
       default:
           return state;
   }
}