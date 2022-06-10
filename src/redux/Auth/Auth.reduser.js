import { LOGIN_ERROR, LOGIN_lOADING, LOGIN_SUCCESS, LOGOUT } from "./Auth.type"

let token=localStorage.getItem("token");

const initialState={
    loading:false,
    error:false,
    isAuth:!!token,
    token:token
}


export const authReduser=(store=initialState,{type,payload})=>{

    switch(type){
        case LOGIN_lOADING:{
            return{...store,loading:true,error:false}
        }
        case LOGIN_SUCCESS:{
             // already is a string so no need to stringyfy
            localStorage.setItem("token",payload.token)
            return{...store,
            loading:false,
            error:false,
            isAuth:true,
            token:payload.token

            
            }
        }
        case LOGIN_ERROR:{
            return{...store,
                loading:false,
                error:true,
                isAuth:false,
            }
        }
        case LOGOUT:{
            // already is a string so no need to stringyfy
            localStorage.removeItem("token");
            return{...store,isAuth:false,token:""}
        }
       
    
    default:
            return store;

    }
}