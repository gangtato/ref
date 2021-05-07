import { useEffect } from "react";
import { getallcontact } from '../../../api/Contact';
import { getallcontactAction } from "../../../store/Contacts/actions";
import { useDispatch, useSelector } from "react-redux";

export function Favorite(){
    const dispatch = useDispatch();
    const stateGlobal:any = useSelector(state => state);
    let index:any = 1;
    let hal:any;
    
    useEffect(()=>{  
        console.log(stateGlobal.fav.statusState);
        index+=1;
    },[]);
    
    

    if(stateGlobal.fav.statusState === true){
       hal =
       <div>
            <p className="border py-2 px-2 w-1/6">{index}</p>
            <p className="border py-2 px-2 w-1/5">{stateGlobal.contact.image}</p>
            <p className="border py-2 px-2 w-1/3">{stateGlobal.contact.name}</p>
       </div>; 
    }


    return(
        <div>
            {hal}
        </div>
        
    );
}