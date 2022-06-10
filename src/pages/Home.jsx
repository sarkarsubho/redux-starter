import React, { useEffect} from "react";
// import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { getFeedsApi } from "../redux/Feed/Feed.action";

const Home = () => {

  const dispatch=useDispatch();

    const {data,getFeeds}=useSelector((store)=>store.feed);
 
  useEffect(() => {

    if(data.length ===0){
      dispatch(getFeedsApi())
    }
    
   
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />
    {getFeeds.loading && <div> Loading ...</div>}
    {getFeeds.error && <div> error ...</div>}

      {!getFeeds.loading && data.map((feed) => (
        <div
          key={feed.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{feed.title}</div>
          <div>{feed.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
