import React from "react";
import"./rabbit.css"
import wave from "../assets/wave.svg"
import khr from "../assets/Screenshot 2023-09-29 at 19.24.09.png"
import panchi from "../assets/panchi.png"
function Rabbit(){
    return(
        <div className="rod">
        <div className="Rab">
            <div className="tent">
                <h1 className="Rabbits">Rabbits</h1>
                <p className="Search">Searching for a vet who can treat your pet rabbit? <br/>search no more, you’ve found us!</p>
                <button className="button"><p className="Book">Book an Appointment</p></button>
            </div>
            <img className="waveImg" src={wave}></img>
        </div>
        <div className="best">
            <h1 className="vet">Providing The Best Veterinary Service<br/> To Your Beloved Rabbit</h1>
            
        </div>
        <p className="para">Keeping your rabbit healthy takes more than just a carrot; it requires knowledge and dedication. <br/>Furthermore, a rabbit vet who has a good hold on all rabbit related things.<br/>You can now relax as we ‘Stars Vet’ have immense experience and are specialised in taking care of rabbits.</p>
        <div className="bigRab">
            
        <div className="dyk">
            <img className="fhh" src={khr}></img>
            


        </div>
        <div className="trr">
        <div className="didju">
            <h1 className="ss">Did </h1>
            <h1 className="sz">You  </h1>
            <h1 className="sf">Know?</h1>
        </div>
        <div className="pra">
            <p className="fy">Rabbits are very notorious and expert in hiding their problems. A minute change in their behaviour should alarm you. Sooner the problem is diagnosed, faster the right medication and treatment can be prescribed which will give us better outcome.</p>
        
        </div>
        </div>
        </div>
        
        <div className="servv">
            <div className="con">
                <h1 className="gh">Why Choose</h1>
                <h1 className="gj"> Star Vets?</h1>
                <p className="brah">Stars Vet has an experienced team and provides advanced rabbit care. From regular check-ups to nutrition and housing guidelines and everything in between, we are capable of doing all. We have wide range of food and toy products that <br></br>are safe for rabbits.</p>
            </div>
            <div className="yoo">
                <img className="jkj" src={panchi} ></img>
            </div>
        </div>
        
    
    
    </div>
    
    
    )
}

export default Rabbit