import axios from "axios";
import { FEED_ERROR, FEED_lOADING, FEED_SUCCESS } from "./Feed.type";



export const getFeedsApi=()=>(dispatch)=>{

    dispatch({type:FEED_lOADING});

    axios.get("http://localhost:8080/feeds").then(res=>{
       dispatch({type:FEED_SUCCESS,payload:res.data}) 
    }).catch(()=>{
         dispatch({type: FEED_ERROR})
    })
  
}