import Register from "./Register";
import "./App.css";
import Axios from "axios";
import Login from "./Login";
import { useState } from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import Topbar from "./components/Topbar";
import CourseTypeGraph from "./components/CourseTypeGraph/CourseTypeGraph";
import ChartPage from "./ChartPage";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./ErrorPage";
import AccountPage from "./AccountPage";
import EditProfilePage from "./EditProfilePage";

function App() {
  
 
  return (
    
    <div className="App">
      <BrowserRouter>
  
        <Routes>
         {/* <Route path="/" element={< ChartPage/>}></Route> 
         <Route path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/" exact element={<LoginForm />}></Route>
          <Route path="/login" element={<LoginForm />}></Route> 
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/chart" element={< ChartPage/>}></Route> 
          <Route path="/account" element={< AccountPage/>}></Route> 
          <Route path="/editprofile" element={<EditProfilePage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
