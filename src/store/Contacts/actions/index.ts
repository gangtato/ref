import ContactActionType from '../globalActionTypes';

export function getallcontactAction(data:any){
   return{
            type: ContactActionType.CONTACT_GET_ALL,
            data
         }   
}

export function uploadContactAction(image:any){
    return{
        type: ContactActionType.CONTACT_ADD,
        image
    }
}