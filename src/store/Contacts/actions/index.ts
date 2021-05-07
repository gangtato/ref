import ContactActionType from '../globalActionTypes';

export function getallcontactAction(data:any){
   let {id,name,phone,company,job,image,email} = data;
   return{
            type: ContactActionType.CONTACT_GET_ALL,
            id,
            name,
            phone,
            company,
            job,
            image,
            email
        }   
}

export function uploadContactAction<T>(data:T){
    return{
        type: ContactActionType.CONTACT_ADD,
        data
    }
}