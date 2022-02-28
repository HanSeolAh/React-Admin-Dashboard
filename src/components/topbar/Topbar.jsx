import React from 'react';
import "./topbar.css";
import { NotificationsNoneOutlined, Language, Settings } from '@material-ui/icons';


const Topbar = () => {
  return (
    <div className = 'topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">
                    SeunghoAdmin
                </span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNoneOutlined/>      
                    <span className="topIconBadge">
                        2   
                    </span> 
                </div>
                <div className="topbarIconContainer">
                    <Language />      
                    <span className="topIconBadge">
                        2   
                    </span> 
                </div>
                <div className="topbarIconContainer">
                    <Settings />       
                </div>
                <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=" alt="" className="topProfile" />
            </div>
        </div> 
    </div>
  )
}

export default Topbar