import React from "react";
import"./rabbit.css"
import wave from "../assets/wave.svg"
import rabbit from "../assets/vecteezy_cute-rabbit-isolated_27848045_888-removebg-preview_1-removebg-preview.png"
import rabbitup from "../assets/rabbitup.svg"
import cicrlce from "../assets/circle.svg"

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
            <img className="circle" src={cicrlce}></img>
            <img className="shareer" src={rabbit}></img>
            <img className="headd"src={rabbitup}></img>
            


        </div>
        <div className="didju">
            <h1 className="ss">Did You  </h1>
            <h1 className="sf">Know?</h1>
        </div>
        </div>
        <div className="pra">
            <p className="fy">Rabbits are very notorious and expert in hiding their problems. A minute change in their behaviour should alarm you. Sooner the problem is diagnosed, faster the right medication and treatment can be prescribed which will give us better outcome.</p>
        
        </div>
        <div className="servv">
            <div className="con">
                <h1 className="gh">Why Choose</h1>
                <h1 className="gj"> Star Vets?</h1>
            </div>
        </div>
    
    
    </div>
    
    
    )
}

export default Rabbit