import { FEED_ERROR, FEED_lOADING, FEED_SUCCESS } from "./Feed.type";


const initialState={
    getFeeds:{
    loading:false,
    error:false,
  
    },
   
    data:[]
}

export const feedReduser=(store=initialState,{type,payload})=>{

    switch(type){

        case FEED_lOADING:{
            return{...store,getFeeds:{
                ...store.getFeeds,
                loading:true,
                error:false
            }}
        }
        case FEED_SUCCESS:{
            return{...store,getFeeds:{
                ...store.getFeeds,
                loading:false,
                error:false
            },
            data: payload,
        }
        }
        case FEED_ERROR:{
            return{...store,getFeeds:{
                ...store.getFeeds,
                loading:false,
                error:true
            }}
        }


    default:
        return store;


    }
}