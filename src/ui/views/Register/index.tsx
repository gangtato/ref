import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../api/Auth';
import { useHistory, Link } from 'react-router-dom';

function Register(){
   let history = useHistory();
   const { register, handleSubmit } = useForm();

   const onSubmit = async (formData:any) => {
      
      let { name, email, password, confirmPassword } = formData;

      if( password !== confirmPassword ) {
        alert("Password Anda Tidak Sama");
      }

      try{
         await registerUser({name,email,password}).then(()=>{
            history.push('/phonebook');
         }).catch(err=>{
            alert(err);
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
         <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
         <h1 className="text-center py-2">
            Registrasi Member
         </h1>
         
         {/* name */}
         <label>Name</label> 
         <input 
         type="text"
         className="border border-gray-400 rounded px-2 py-2 my-2"
         {...register("name")}
         />

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

         {/* konfirmasi password */}
         <label>Konfirmasi Password</label>
         
         <input 
         type="password" 
         className="border border-gray-400 rounded px-2 py-2 mt-2"
         {...register("confirmPassword")}
         />

         <div>
         {/* login */}
         <input
         type="submit"
         className="border bg-blue-500 w-1/3 float-right text-white px-2 py-2 rounded mt-6"/>
         {/* register */}
         <Link to="/login">
         <button className="border border-b bg-yellow-500 text-white w-1/3 float-left px-2 py-2 rounded mt-6">Login</button>
         </Link>
         </div>
      
         </form>
   </div>
  
   <div className="flex-none w-1/3">

   </div>
</div>);
}

export default Register;