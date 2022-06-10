import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { RequiredAuth } from "./HOC/RequiredAuth";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const {isAuth}=useSelector(store=>store.auth)
  const navigate = useNavigate();


  useEffect(()=>{
    if(isAuth){
      navigate("/")
    }else{
      navigate("/login")
    }
    
  },[navigate, isAuth])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        
        
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
