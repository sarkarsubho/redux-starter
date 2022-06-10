import axios from "axios";
import { LOGIN_ERROR, LOGIN_lOADING, LOGIN_SUCCESS, LOGOUT } from "./Auth.type"



export const loginApi=(data)=>(dispatch)=>{

    dispatch({type:LOGIN_lOADING});
    axios.post("https://reqres.in/api/login",{
        email: data.email,
        password: data.password
    }).then(res=>{
       dispatch({type:LOGIN_SUCCESS,payload:res.data}) 
    }).catch(()=>{
         dispatch({type: LOGIN_ERROR})
    })
    
   

}

export const logoutApi=()=>({type:LOGOUT});