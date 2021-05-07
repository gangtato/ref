import axios from 'axios';
import {config} from '../../utils/config';

export async function registerUser<T>(data:T){
    return await axios.post(`${config.API_PHONE_BOOK}/signup`, data);
}

export async function userLogin<V, T>(email:V, password:T){
    return await axios.post(`${config.API_PHONE_BOOK}/signin`, { email,password });
}

export async function userLogout(){
let localauth:any = localStorage.getItem("auth");
let { token }:any = localStorage.getItem('auth') ? JSON.parse(localauth) :{};
return await axios.post(`${config.API_PHONE_BOOK}/logout`, null, {
            headers: {
                authorization: `Bearer ${token}`
            }
     }).then((response) => {
        localStorage.removeItem('auth');
        return response;
     });
}
