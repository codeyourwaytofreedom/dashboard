import Summary from "./summary/summary";
import { useState, useEffect } from "react";


const Panel = () => {
    const image_horizontal = require("./hotel.jpeg")


    return ( 
        <div className="Panel-comp" style={{backgroundImage:`url(${image_horizontal})`}}>
            <Summary/>

        </div>
     );
}
 
export default Panel;