import React from "react";
import "./editprofilepage.scss";
import Navbar from './components/Navbar/Navbar'
import profileimg from './imgs/profile.jpg'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';

const EditProfilePage = () => {
  return (
    <div className="accountpage">
      <div className="accountpageglass">
        <Navbar />
        <div className="userprofile">
        
          <form>
            <div className="row">
              <div className="col-md-4">
                <img src={profileimg} />
              </div>
              <div className="col-md-6">
              <Link to="/account">
            <CloseIcon className="close-icon"/>
            </Link>
                <div className="editprofilehead">
                  <h5> Rawisara Mawilerd</h5>
                  <h6>admin</h6>
                  <li className="mt-6 mb-4">online</li>
                  <ul className="nav nav-tabs" />
                  <div className="profileinfo">
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="input-edit-firstname"
                        />
                      </div>      
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <label>Last Name</label>
                      </div>
                      <div className="col-md-6">
                      <input
                          type="text"
                          className="input-edit-lastname"
                        />
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
                      <input
                          type="password"
                          className="input-edit-firstname"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                     
                        <button className="btn-ok">ok</button>
                        
                    </div>
                  </div>
                </div>
                
              </div>
            
            </div>

            <div className="row">
              {/* left side */}
              <div className="col-md-4">
                <div>
                  <input type="file" className="imginput" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
