import React,{ useEffect, useState } from "react";

import axios from "axios";
import Tables from "./components/Tables";
import { CircularProgress } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import EditPage from "./components/EditPage";


function App() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
   
  // const location = useLocation();

  const searchData = async() => {
    setLoading(true);
    setTimeout(async() => { 

    try {
       
    const response = await axios
                  .get("http://localhost:3000/users")
      
    setLoading(false);
    setUsersData(response.data);
   
    } catch (error){
      console.log("Error in api calling "+ error);
    }
     }, 300);
   } 

  
  
  return (
    <>
   <Router>
 
      <Routes>
      <Route
    path="/"
    element={
      <div>
        <button onClick={searchData}>Search</button>
        {loading ? <CircularProgress /> : <Tables rows={usersData} />}
      </div>
    }
  />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App



