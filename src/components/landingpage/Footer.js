import React from "react"
import "../landingpage/Footer.css"
import logo from "../assets/stlogo.svg"
import wtsap from "../assets/wtsap.svg"
import insta from "../assets/insta.svg"
import fb from "../assets/fb.svg"

function Footer (){
    return(
        <div className="green">
            <div className="StvLogo">
            <img className="StvLogo" src={logo}></img>
            <div className="iconss">
                <img className="icon" src={wtsap}></img>
                <img className="icon" src={insta}></img>
                <img className="icon" src={fb}></img>
            </div>
            </div>
            <div className="linkings">
                <a href=""> Learn More</a>
                <div className="smolinks">
                <a href=""> Species we Treat<br></br></a> 
                <a href=""> FAQs<br></br></a> 
                <a href=""> Services <br></br></a> 
                <a href=""> Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Footer