import React, { useEffect, useState } from 'react';
import { getallcontact } from '../../../api/Contact';
import { getallcontactAction } from '../../../store/Contacts/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PhoneAdd } from './phoneAdd';
import { PhoneList } from './phonelList';
import { Favorite } from './favorite';
import { 
    getMenuPhoneBookAction,
    getMenuFavoriteAction,
    getMenuAddContactAction
} from '../../../store/Menu/actions';



export function PhoneBook(){
    const dispatch = useDispatch();
    const stateGlobal:any = useSelector(state=>state);
    let halaman:any;
    
      if(stateGlobal.menu.stateMenu === "PhoneList"){
           halaman = <PhoneList/>;
      }else if(stateGlobal.menu.stateMenu === "Favorite"){
           halaman = <Favorite/>;
      }else{
           halaman = <PhoneAdd/>;
      }


    return(
       <div className="flex flex-row ">
           <div className="flex-none w-1/3">

           </div>
           <div className="border flex flex-col w-1/3">
               <div>
                    <button onClick={()=>dispatch(getMenuPhoneBookAction())} className="bg-green-200 hover:bg-green-300 px-2 py-2 border w-1/3">PHONE BOOK</button>
                    <button onClick={()=>dispatch(getMenuFavoriteAction())} className="bg-red-200 hover:bg-red-300 px-2 py-2 border w-1/3">FAVORITES</button>
                    <button onClick={()=>dispatch(getMenuAddContactAction())} className="bg-blue-200 hover:bg-blue-300 px-2 py-2 border w-1/3">ADD CONTACT</button>
               </div>
               <div>
                   {halaman}
               </div>
           </div>
           <div className="flex-none w-1/3">
                    
           </div>
       </div>
    );
}

export default PhoneBook;