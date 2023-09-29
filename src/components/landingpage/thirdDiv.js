import React from "react";
import "./thirdDiv.css";
import rab from "../assets/rab.svg"
import rep from "../assets/rep.svg"
import amph from "../assets/amph.svg"
import bir from "../assets/bir.svg"
import fish from "../assets/fish.svg"
import gipi from "../assets/gipi.svg"

function ThirdDiv () {
    return(
  
        <div>
        <div className="grids">
        <div className="ExPets">
            <h1 className="Exotic">Exotic Pets</h1>
            <h1 className="treat"> We Treat</h1>       
         </div>
          <p className="rr">We take pride in being your top choice as pet doctors. Our expertise extends beyond cats and dogs; we specialize in exotic veterinary care, catering to a wide range of unique and small-sized pets.</p>
          <div class="grid-container">
            <div class="grid-item">
               
                <img src={rab}></img>
               
             </div>
            <div class="grid-item">
            <img src={rep}></img>
            </div>
            <div class="grid-item">
            <img src={bir}></img>
            </div>
            <div class="grid-item">
            <img src={gipi}></img>
            </div>
            <div class="grid-item">
            <img src={fish}></img>
            </div>
            <div class="grid-item">
            <img src={amph}></img>
            </div>
            </div>
          
          </div> 
       
          </div> 
   
  
    )
}

export default ThirdDiv