import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../api/Auth/index';
import { userLoginAction } from '../../../store/Auth/actions';


function Login(){
const { register, handleSubmit } = useForm();
const dispatch = useDispatch();
const history = useHistory();

const onSubmit = async (data:any) =>{ 
  let { email, password } = data;

  try{
     await userLogin(email,password).then((res)=>{
        let user = res.data.data.name;
        let token = res.data.data.token;
        dispatch(userLoginAction(user,token));
        history.push('/phonebook');
     }).catch(err=>{
        console.log(err);
     });
  }catch(err){
    console.log(err);
  }
  
}


return(
<div className="flex">
   <div className="flex-none w-1/3">

   </div>
   <div className="mt-24 px-6 border border-gray-400 shadow flex py-8 w-1/3">
         <form 
         className="flex flex-col w-full"
         onSubmit={handleSubmit(onSubmit)} action="post">
         <h1 className="text-center py-2">
            Login Member
         </h1>
         {/* email */}
         <label>Email</label>
         <input 
         type="text"
         className="border border-gray-400 rounded px-2 py-2 my-2"
         {...register("email")}
         />
      
         {/* password */}
         <label>Password</label>
         <input 
         type="password" 
         className="border border-gray-400 rounded px-2 py-2 mt-2"
         {...register("password")}
         />
         <div>
         {/* login */}
         <input
         value="Masuk"
         type="submit" 
         className="border bg-blue-500 w-1/3 float-right text-white px-2 py-2 rounded mt-6"/>
         {/* register */}
         <Link to="/register">
            <button className="border border-b bg-yellow-500 text-white w-1/3 float-left px-2 py-2 rounded mt-6">Register</button>
         </Link>
         </div>
        </form>
   </div>
   <div className="flex-none w-1/3">

   </div>
</div>);
}

export default Login;