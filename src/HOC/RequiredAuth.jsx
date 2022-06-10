import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import {useLocation} from "react-router-dom";

export const RequiredAuth = ({children}) => {

    const {isAuth}=useSelector(store=>store.auth);
    const location=useLocation();

    const from={
        pathname:location.pathname
    }


  return (
    <div>requiredAuth</div>
  )
}
