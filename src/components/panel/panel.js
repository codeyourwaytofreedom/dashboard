import Bubble from "./bubble/bubble";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart, faMap, faMapMarked, faMoneyBill1Wave, faPeopleGroup, faPercent } from '@fortawesome/free-solid-svg-icons';
import Details from "../details/details";
import { useState } from "react";

const Panel = () => {
    const image_horizontal = require("./hotel.jpeg")
    const [details, setDetails] = useState(" "); 


    return ( 
        <div className="Panel-comp" style={{backgroundImage:`url(${image_horizontal})`}}>
            <div className="bubbles">
                <div className="one">
                    <div className="one_kernel" onClick={()=> setDetails("finance")}>
                        <Bubble 
                            title = {<span className="orange" id="up">Finance </span>}
                            title_detail = {<span className="turq"><FontAwesomeIcon icon={faMoneyBill1Wave} size={"lg"} color={"lightgreen"} beatFade/> </span>}                        
                        />
                   </div>
                </div>
                <div className="two">
                    <div className="two_kernel" onClick={()=> setDetails("visitors")}>
                        <Bubble 
                            title = {<span className="orange" id="down">Visitors </span>}
                            title_detail = {<span className="turq"><FontAwesomeIcon icon={faLuggageCart} size={"lg"} color={"salmon"} beatFade/> </span>}
                        />
                    </div>
                </div>
                <div className="three">
                    <div className="three_kernel" onClick={()=> setDetails("occupancyrate")}>
                        <Bubble 
                            title = {<span className="orange" id="up">Occupancy Rate </span>}
                            title_detail = {<span className="turq"><FontAwesomeIcon icon={faPercent}  size={"lg"} color={"red"} beatFade/> </span>}                        
                        />
                   </div>
                </div>
                <div className="four">
                    <div className="four_kernel">
                        <Bubble 
                            title = {<span className="orange" id="down">Staff</span>}
                            title_detail = {<span className="turq"><FontAwesomeIcon icon={faPeopleGroup} size={"lg"} color={"silver"} beatFade/> </span>}
                        />
                    </div>
                </div>
                <div className="five">
                    <div className="five_kernel">
                        <Bubble 
                            title = {<span className="orange" id="up">Facilities</span>}
                            title_detail = {<span className="turq"><FontAwesomeIcon icon={faMapMarked} size={"lg"} color={"turquoise"} beatFade/> </span>}                        
                        />
                    </div>
                </div>
            </div>
            <Details details={details} setDetails={setDetails}/>
        </div>
     );
}
 
export default Panel;