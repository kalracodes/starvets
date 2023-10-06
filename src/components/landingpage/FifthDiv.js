
import "./FifthDiv.css"
import syringe from "../assets/syringe.svg"
import bandaid from "../assets/bandaid.svg"
import ff from "../assets/ff.svg"
import page from "../assets/page.svg"
import image from "../assets/image.svg"
import blob from "../assets/blob.svg"

function FifthDiv () {
    return(
        <div>
      
        <div className="Services">
        <div className="OurServ">
            <h1 className="fe"> Our</h1>
            <h1 className="de">Services</h1>
            
        </div>

        <p className="sd"> We take pride in being your top choice as pet doctors. Our expertise extends beyond cats and dogs; we <br></br>specialize in exotic veterinary care, catering to a wide range of unique and small-sized pets.</p>
            <div className="wrapper">
            <div class="ch">
            <div class="square">
                <h1 className="Healthcare">Healthcare Packages</h1>
                <p className="content">The initial months with a new pet can be overwhelming. Hence, we have designed packages ensuring peace of mind and top-notch veterinary care for your new companion.</p>
                <a className="LearnMore" href="url"> Learn More &gt; </a>
                <img  className = "inj"src={syringe}/>
                
            </div>
            <div class="square">  <h1 className="Healthcare">Sterilization (Desexing) </h1>
                <p className="content">Sterilization, also referred to as desexing or neutering, plays a crucial role in preventing potential issues that may arise in your pet's future.</p>
                <a className="LearnMore" href="url"> Learn More &gt; </a>
                <img  className = "band"src={bandaid}/>
                </div>
            <div class="square">
            <h1 className="Healthcare">General Health Check</h1>
                <p className="content">The initial months with a new pet can be overwhelming. Hence, we have designed packages ensuring peace of mind and top-notch veterinary care for your new companion.</p>
                <a className="LearnMore" href="url"> Learn More &gt; </a>
                <img  className = "page"src={page}/>

            </div>
            <div class="square">
            <h1 className="Healthcare">Surgery and Anaesthesia</h1>
                <p className="content">Although all surgeries and anesthesia carry inherent risks, we prioritize providing the utmost care to minimize them for your beloved pet.</p>
                <a className="LearnMore" href="url"> Learn More &gt; </a>
                <img  className = "gg"src={ff}/>

            </div> 
            </div>
            <img className ="bird" src = {image}/>
            <img className ="blob" src = {blob}/>
            </div>

        </div>
        </div>
    )
}

export default FifthDiv