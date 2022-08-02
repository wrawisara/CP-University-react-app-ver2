import React from "react";
import "./topbar.css"
import SettingsIcon from '@material-ui/icons/Settings';

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                   <span className="logo">Dashboad</span>
                </div>
                <div className="topRight">
                    <div className="topbarIcons">
                        <SettingsIcon/>
                    </div>
                </div>

    
        </div>
        </div>
    )
}