import axios from 'axios';
import {config} from '../../utils/config';

export async function savecontact<T>(data:T){
    let localauth:any = localStorage.getItem("auth");
    let { token }:any = localStorage.getItem('auth') ? JSON.parse(localauth) :{};
    return await axios.post(`${config.API_PHONE_BOOK}/contacts`, data,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}

export async function getallcontact(){
    let localauth:any = localStorage.getItem("auth");
    let { token }:any = localStorage.getItem('auth') ? JSON.parse(localauth) :{};
    return await axios.get(`${config.API_PHONE_BOOK}/contacts`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}

export async function getcontactbyid<T>(id:T){
    let localauth:any = localStorage.getItem("auth");
    let {token}:any = localStorage.getItem("auth") ? JSON.parse(localauth) : {};
    return await axios.get(`${config.API_PHONE_BOOK}/contacts/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        } 
    })
}

export async function updatecontactbyid<T, K>(id:T, data:K){
    let localauth:any = localStorage.getItem("auth");
    let {token}:any = localStorage.getItem("auth") ? JSON.parse(localauth): {};
    return await axios.put(`${config.API_PHONE_BOOK}/contacts/${id}`,data,{
        headers: {
            authorization: `Bearer ${token}`
        } 
    })
}