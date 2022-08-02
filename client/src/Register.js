import Axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [registerList, setRegisterList] = useState([]);

  const getRegister = async() => {
    const response = await Axios.get("http://localhost:3001/registers")
    setRegisterList(response.data);
    
  };

  const addRegister = async() =>{
     const response = await Axios.post("http://localhost:3001/create", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
    setRegisterList([
        ...registerList,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
      ])
  }
  
  
    

      

  return (
    <div className="register-form">
        <form className="form" action="">
        <h1>CP University </h1>
        <h2>Sign Up</h2>
        <br/>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Fisrt Name :
            </label>
            <input
              type="text"
              className="input-register"
              placeholder="Enter First Name"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name :
            </label>
            <input
              type="text"
              className="input-register"
              placeholder="Enter Last name"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="text"
              className="input-register"
              placeholder="Enter Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              type="password"
              className="input-password"
              placeholder="Enter Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password :
            </label>
            <input
              type="password"
              className="input-password"
              placeholder="Enter Confirm Password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            ></input>
          </div>
          <button className="btn-register" onClick={addRegister}>Register</button>
          <Link to ="/login">
            <button className="btn-backtologin" >Back to Login</button>
        </Link>
        </form>
      <hr />
      <div className="register">
        <button classname="btn-showdata" onClick={getRegister}>
          Show data
        </button>
        <br /> <br />
        {registerList.map((val, key) => {
          return (
            <div className="register card">
              <div className="card-body text-left">
                <p className="card-text">First Name: {val.firstname}</p>
                <p className="card-text">Last Name: {val.lastname}</p>
                <p className="card-text">Email: {val.email}</p>
                <p className="card-text">Password: {val.password}</p>
                <p className="card-text">
                  Confirm Password: {val.confirmpassword}
                </p>
                <div className="d-flex"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Register;
