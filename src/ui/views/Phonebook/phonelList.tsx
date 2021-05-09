import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallcontactAction } from "../../../store/Contacts/actions";
import { getallcontact } from '../../../api/Contact';
import { AddFavoriteContactAction, MinFavoriteContactAction } from "../../../store/Favorite/actions";

export function PhoneList(){
    let tombol:any;
    let comp:any;
    const dispatch = useDispatch();
    const stateGlobal:any = useSelector(state => state);
    let index:any = 1;
    let local:any = localStorage.getItem('favorite');
    
    useEffect(()=>{  
        getallcontact().then((res)=>{
            let data = res.data.data;
            dispatch(getallcontactAction(data));
            console.log("Awal Data ",data);
        });
        console.log("Setelah dispatch",stateGlobal.contact);    
        index+=1;
    },[]);
     
    console.log(stateGlobal);
    // if(stateGlobal.fav.statusState === false){
    //     tombol = <button onClick={()=>dispatch(AddFavoriteContactAction(true))} className="border px-2 py-2 bg-gray-700 hover:bg-gray-800 text-white w-1/3">Add To Favorite</button>;
    // }else{
    //     tombol = <button onClick={()=>dispatch(MinFavoriteContactAction(false))} className="border px-2 py-2 bg-gray-700 hover:bg-gray-800 text-white w-1/3">Added</button>
    // }
    comp = stateGlobal.contact.contacts.map((data:any,index:any)=>{
        return(
        <div className="flex flex-row w-full"> 
            <p className="px-1 py-1 w-1/7">{index+1}</p>
            <p className="px-1 py-1 w-1/3">{data.name}</p>
            <img src={data.image} className="w-10 h-10 w-1/7"/>
            <button className="border px-2 py-2 bg-gray-700 hover:bg-gray-800 text-white w-1/5">Add to Favorite</button>
            <button className="border px-2 py-2 bg-red-700 hover:bg-red-800 text-white w-1/5">Delete</button>
        </div>);
    })
    


    return(
        <div className="flex flex-row px-2 py-2">       
            <div className="flex flex-col w-full">{comp}</div>       
        </div>
    );
}