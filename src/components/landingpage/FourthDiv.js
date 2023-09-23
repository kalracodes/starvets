import React from "react";
import "./FourthDiv.css"
import PetCare from "./assets/petCare";
import Hospital from "./assets/hospital";
import Hand from "./assets/hand";

function FourthDiv () {
    return(
        <div className="Fourth">
            <div className="Text">
        <h1 className="Why">Why </h1>
        <h1 className="Choose">Choose </h1>
        <h1 className="Us">Us? </h1>

        </div>
        <p className="pride">We take pride in being your top choice as pet doctors. Our expertise extends beyond cats and dogs;<br></br> we specialize in exotic veterinary care, catering to a wide range of unique and small-sized pets.</p>
        <div class="features">
        <div class="feature">
            <PetCare/>
            <span class="featureTitle">Expert pet-care <br></br> by qualified team</span>
            
        </div>
        <div class="feature">
            <Hospital/>
            <span class="featureTitle">State-of-the-art<br></br>facilities</span>
          
        </div>
        <div class="feature">
            <Hand/>
            <span class="featureTitle">Advice on nutrition<br></br> and Husbandry</span>
            
        </div>

        
        </div>
        </div>
        
       
    )

        

}


export default FourthDiv