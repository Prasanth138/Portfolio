import React from 'react';
import "./Profile.css";
import Typical from 'react-typical'

function Profile() {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                    <a href="https://github.com/Prasanth138" target="_blank">
                        <i className="fa fa-github"></i> 
                    </a>
                    <a href="https://www.linkedin.com/in/prasanth-a-41baaba2/" target="_blank">
                        <i className="fa fa-linkedin"></i> 
                    </a>
                    <a href="https://twitter.com/Prasanth3694?s=09" target="_blank">
                        <i className="fa fa-twitter"></i> 
                    </a>
                    <a href="https://www.instagram.com/pra_santh_anbu/" target="_blank">
                        <i className="fa fa-instagram"></i> 
                    </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Prasanth</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                    {" "}
                    <h1>
                    <Typical 
                    loop={Infinity}
                    
                    steps={[
                        "Enthusiastic Dev 🔴",
                        1000,
                        "Full Stack Web Developer 💻",
                        1000,
                        "MERN Stack Dev 😎",
                        1000,
                        "Cross Platform 🌐",
                        1000,
                        "React Developer ⚛️",
                        1000,
                    ]}
                /> 
                    </h1>
                    </span>
                    <span className="profile-role-tagline">
                     Knack of building Web applications with front and back end operations.  
                    </span>
                </div>
                <div className="profile-options">
                     <a href="#ContactMe1"><button className="btn primary-btn rounded-pill">
                     {""}
                     <span className="ButtonHire">Hire Me{" "}</span>
                     </button></a>
                     <a href="Resume.pdf" id="resume" download="Prasanth.pdf">
                     <button className="btn highlighted-btn rounded-pill p-3">
                     Get Resume
                     </button>
                     </a>
                </div>               
            </div>
            <div className="profile-picture">
                     <div className="profile-picture-background">

                     </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
