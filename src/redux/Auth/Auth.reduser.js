import { LOGIN_ERROR, LOGIN_lOADING, LOGIN_SUCCESS, LOGOUT } from "./Auth.type"

const initialState={
    loading:false,
    error:false,
    isAuth:false,
    token:""
}


export const authReduser=(store=initialState,{type,payload})=>{

    switch(type){
        case LOGIN_lOADING:{
            return{...store,loading:true,error:false}
        }
        case LOGIN_SUCCESS:{
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
            return{...store,isAuth:false}
        }
       
    
    default:
            return store;

    }
}