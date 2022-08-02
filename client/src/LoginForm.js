import React, { useState } from "react";
/*useState เป็นการเรียกใช้งาน state และ การเปลี่ยนแปลงค่า state */
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function LoginForm() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  /*ให้ details เก็บ array ได้แก่ name email password */

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };

  const adminUser = {
    email: "admin01@gmail.com",
    password: "0000",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };


  return (
    <>
      {" "}
      {user.email !== "" ? (
        <section>
          <Dashboard/>
        </section>
      ) : (
        <section>
          <div className="login-form">
            <form className="form" onSubmit={submitHandler}>
            <h1>CP university</h1>
            <h2>Log In</h2>
            <br/>
              <div className="form-inner">
                {error !== "" ? <div className="error">{error}</div> : ""}
                <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input className="input-login"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input className="input-login"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                  />
                </div>
                <br/>
                <div>
                  <input className="input-submit" type="submit" value="Login" />
                </div>
                <Link to="/register">
              <button className="btn-signup">Sign Up</button>
            </Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
export default LoginForm;
