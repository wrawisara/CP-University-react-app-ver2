import React from "react";
import "./navbar.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavbarData } from "../../Data/Data";
import { useState } from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import HelpIcon from "@material-ui/icons/Help";

const Navbar = () => {
  //   // const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
  //   //     <ExitToAppIcon/>

  //   // })

  const [selected, setSelected] = useState(0);
  return (
    <nav>
      <div className="sidebar">
        <div className="logo">
          <span>
            <span>CP</span> university
          </span>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to ="/dashboard">
            <br/>
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
            <Link to ="/account">
            <br/>
            <li className="sidebarListItem">
              <AccountBoxIcon className="sidebarIcon" />
              Account
            </li>
            </Link>
            <Link to ="/chart">
            <br/>
            <li className="sidebarListItem">
              <ShowChartIcon className="sidebarIcon" />
              Chart
            </li>
            </Link>
            <Link to ="/login">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <li className="sidebarListItem">
              <ExitToAppIcon className="sidebarIcon" />
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
