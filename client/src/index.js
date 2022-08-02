import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes ,Router }  from 'react-router-dom';
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import ChartPage from './ChartPage';
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route> 
    <Route path="/login" element={<LoginForm />}></Route> 
    <Route path="/register" element={<Register />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/piechart" element={< ChartPage/>}></Route> 
          
    </Routes>   
    </BrowserRouter> */}
    
    <App/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
