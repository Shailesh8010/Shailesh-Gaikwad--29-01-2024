import React from "react";
import AboutUs from '../assets/photo.jpeg';
import "../styles/About.css";


function About(){
    return(
        <>
      
        <div className="about">
            
            <div className="aboutTop" style={{
                backgroundImage: `url(${AboutUs})`
            }}>
            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        </p>
            </div>

        </div>
        </>
    )
}

export default About;