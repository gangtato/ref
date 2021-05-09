import ContactActionType from '../globalActionTypes';

let initialState:any = {
    contacts: []
}

export default function reducer(state = initialState, action:any){
    switch(action.type){
        case ContactActionType.CONTACT_GET_ALL:
            return{
                ...state,
                contacts: action.data
            }
        default:
            return state;
    }
}
