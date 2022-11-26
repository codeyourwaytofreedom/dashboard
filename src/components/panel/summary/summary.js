import { useState } from "react";




const Summary = () => {
    const grid_col = 4
    const [details, setDetails] = useState(false);

    return ( 
        <>
            <div className="Summary-comp">
                <div className="Summary-comp_cell">
                    <div style={{backgroundColor: "black", color: "orange", padding: "10px"}}>
                        HELOO HOTEL
                    </div>
                </div>
                <div className="Summary-comp_cell" id="two">CELL</div>
                <div className="Summary-comp_cell" id="three">CELL</div>
                <div className="Summary-comp_cell">CELL</div>

                <div className="Summary-comp_details">
                    <div className="Summary-comp_details_shell">
                                Details go here...
                    </div>
                </div>
                <div className="Summary-comp_cell">
                    <div style={{backgroundColor: "black", color: "orange", padding: "10px"}}>
                        HELOO HOTEL
                    </div>
                </div>
                <div className="Summary-comp_cell" id="two">CELL</div>
                <div className="Summary-comp_cell" id="three">CELL</div>
                <div className="Summary-comp_cell">CELL</div>

                <div className="Summary-comp_details">
                    <div className="Summary-comp_details_shell">
                                Details go here...
                    </div>
                </div>
            </div>
            <div className="Summary-comp">
                <div className="Summary-comp_cell">
                    <div style={{backgroundColor: "black", color: "orange", padding: "10px"}}>
                        HELOO HOTEL
                    </div>
                </div>

                <div className="Summary-comp_cell" id="two">CELL</div>
                <div className="Summary-comp_cell" id="three">CELL</div>
                <div className="Summary-comp_cell">CELL</div>
                <div className="Summary-comp_cell">
                    <div style={{backgroundColor: "black", color: "orange", padding: "10px"}}>
                        HELOO HOTEL
                    </div>
                </div>

                <div className="Summary-comp_cell" id="two">CELL</div>
                <div className="Summary-comp_cell" id="three">CELL</div>
                <div className="Summary-comp_cell">CELL</div>


            </div>
        </>
        
     );
}
 
export default Summary;


/* style={{gridTemplateColumns: `repeat(${grid_col},1fr)`}} */