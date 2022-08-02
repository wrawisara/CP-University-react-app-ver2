import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './accountpage.scss'
import profileimg from './imgs/profile.jpg'
import { Link } from 'react-router-dom'



const AccountPage = () => {
  return (
    <div className="accountpage">
    <div className="accountpageglass">
            <Navbar/>
            <div className="userprofile">
                <form>
                    <div className="row">
                    <div className="col-md-4">
                        <img src={profileimg}/>
                    </div>
                    <div className="col-md-6">
                        <div className="profilehead">
                            <h5> Rawisara Mawilerd</h5>
                            <h6>admin</h6>
                            <li className="mt-6 mb-4">online</li>
                            <ul className="nav nav-tabs"/>
                            <div className="profileinfo" >
                            <br/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>First Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Rawisara</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Last Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Mawilerd</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>admin01@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>admin01@gmail.com</p>
                                    </div>
                                </div>
                                <br/>
                                <div className="col-md-12">
                                    <Link to="/editprofile ">
                                    <button className="btn-edit">Edit Profile</button>
                                    </Link>
                                </div>




                            </div>

                        </div>
                    </div>
                    </div>

                    <div className="row">
                        {/* left side */}
                        <div className="col-md-4">
                            <div>
                                <input
                                 type="file"
                                 className="imginput"/>
                            </div>
                        </div>
                       
                    </div>
                </form>


            </div>
    </div>
    </div>
   
  )
}
export default AccountPage



{/* 

// const AccountPage = () => {

//     import Axios from "axios";
// import { useState } from "react";
// import { Link } from 'react-router-dom';

// function Register() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [registerList, setRegisterList] = useState([]);

//   const getRegister = async() => {
//     const response = await Axios.get("http://localhost:3001/registers")
//     setRegisterList(response.data);
    
//   };

  
//   return (
//     <div className="accountpage">
//         <div className="accountpageglass">
//             <Navbar/>
//             <div className="userprofile">
//                 <h3>Proflie</h3>
//                 <img src={profileimg}/>
//                 {registerList.map((val, key) => {
//           return (
//             <div className="register card">
//               <div className="card-body text-left">
//                 <p className="card-text">First Name: {val.firstname}</p>
//                 <p className="card-text">Last Name: {val.lastname}</p>
//                 <p className="card-text">Email: {val.email}</p>
//                 <p className="card-text">Password: {val.password}</p>
//                 <p className="card-text">
//                   Confirm Password: {val.confirmpassword}
//                 </p>
//                 <div className="d-flex"></div>
//               </div>
//             </div>
//           );
//         })}
                

//             </div>
//         </div>
//     </div>
//   )
// }


// export default AccountPage */}