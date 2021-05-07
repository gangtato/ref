import ContactActionType from '../globalActionTypes';

let initialState:any = {
    id:"",
    name: "",
    phone: "",
    job: "",
    company: "",
    email: "",
    image: null
}

export default function reducer(state = initialState, action:any){
    switch(action.type){
        case ContactActionType.CONTACT_GET_ALL:
            return{
                id: action.id,
                name: action.name,
                phone: action.phone,
                job: action.job,
                company: action.company,
                email: action.email,
                image: action.image
            }
        default:
            return state;
    }
}
