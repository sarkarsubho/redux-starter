import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {useLocation} from "react-router-dom";
import { Navigate } from 'react-router-dom';

export const RequiredAuth = ({children}) => {

    const {isAuth}=useSelector(store=>store.auth);
    const location=useLocation();

    const from={
        pathname:location.pathname
    }

    if(isAuth){
      return children
    }else{
      return<Navigate to={"/login"} state={from} replace></Navigate>
    }


}
