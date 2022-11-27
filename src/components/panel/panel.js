import Summary from "./summary/summary";
import { useState, useEffect } from "react";
import Visitors from "./visitors/visitors";
import "./visitors/visitors.css";


const Panel = () => {
    const image_horizontal = require("./hotel.jpeg")


    return ( 
        <div className="Panel-comp" style={{backgroundImage:`url(${image_horizontal})`}}>
            <div className="bubbles">
                <Summary/>
                <Visitors/>
            </div>
            

        </div>
     );
}
 
export default Panel;