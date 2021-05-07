import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallcontactAction } from "../../../store/Contacts/actions";
import { getallcontact } from '../../../api/Contact';
import { AddFavoriteContactAction, MinFavoriteContactAction } from "../../../store/Favorite/actions";

export function PhoneList(){
    let tombol:any;
    const dispatch = useDispatch();
    const stateGlobal:any = useSelector(state => state);
    let index:any = 1;
    let local:any = localStorage.getItem('favorite');

    useEffect(()=>{  
        getallcontact().then((res)=>{
            let data = res.data.data;
            data.map((i:any)=>{
                dispatch(getallcontactAction(i));
            })

        });
            dispatch(AddFavoriteContactAction(local));
        index+=1;
    },[]);


    if(stateGlobal.fav.statusState === false){
        tombol = <button onClick={()=>dispatch(AddFavoriteContactAction(true))} className="border px-2 py-2 bg-gray-700 hover:bg-gray-800 text-white w-1/3">Add To Favorite</button>;
    }else{
        tombol = <button onClick={()=>dispatch(MinFavoriteContactAction(false))} className="border px-2 py-2 bg-gray-700 hover:bg-gray-800 text-white w-1/3">Added</button>
    }


    return(
        <div className="flex flex-row px-2 py-2">
            <p className="border py-2 px-2 w-1/6">{index}</p>
            <p className="border py-2 px-2 w-1/5">{stateGlobal.contact.image}</p>
            <p className="border py-2 px-2 w-1/3">{stateGlobal.contact.name}</p>
            {tombol}
            <button className="border px-2 py-2 bg-red-700 hover:bg-red-800 text-white w-1/5">Delete</button>
        </div>
    );
}