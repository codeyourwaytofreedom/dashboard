import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';



const Summary = () => {
    const grid_col = 4
    const [details, setDetails] = useState(false);

    return ( 
        <>
            <div className="Summary-comp">
                <div className="Summary-comp_cell">
                    <div className="Summary-comp_cell_shell">
                            <div id="top">Occupancy Rate</div>
                            <div id="bottom">89 <FontAwesomeIcon icon={faPercentage} size={"lg"} beat fade/></div>
                    </div>
                        
                       
                </div>

            </div>
        </>
        
     );
}
 
export default Summary;


/* style={{gridTemplateColumns: `repeat(${grid_col},1fr)`}} */