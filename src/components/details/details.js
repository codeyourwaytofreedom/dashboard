import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Chart } from "react-google-charts";

import "./details.css";
import Cell from './cell';
const Details = () => {
     const data = [
        ["Element", "Density", { role: "style" }],
        ["Copper", 8.94, "#b87333"], // RGB value
        ["Silver", 10.49, "silver"], // English color name
      ];
    return ( 
        <div className="details"> 
            <div className="details_kernel">

                    <Cell 
                        title={<span style={{color:"darkgreen"}}>Turnover</span>}
                        content={
                            <div>
                                <span style={{color:"crimson", fontSize:"21px"}}>2022</span><br />
                                <span>Jan-Jun:  §765.000</span><br />
                                <span>Jun-Sep:  §341.000</span>
                            </div>
                        }
                    />




                    <Cell 
                        title={<span style={{color:"crimson"}}>Last 3 Years</span>}
                        content={
                                    <div style={{display:"grid", alignItems:"end", height:"112px", 
                                         width:"150px"}}>
                                        <span style={{width:"45%", height:"30px", backgroundColor:"blue", 
                                            textAlign:"start", color:"white", paddingLeft:"10px", opacity:"1", borderBottomRightRadius:"10px"}}>
                                        2020
                                        </span>
                                        <span style={{width:"95%", height:"30px", backgroundColor:"crimson",
                                            textAlign:"start", color:"white", paddingLeft:"10px", opacity:"1", borderBottomRightRadius:"10px"}}>2021</span>
                                        <span style={{width:"75%", height:"30px", backgroundColor:"black",
                                            textAlign:"start", color:"white", paddingLeft:"10px", opacity:"1", borderBottomRightRadius:"10px"}}>2022</span>
                                    </div>
                            
                        }
                    />




                    <div className="details_kernel_cell">
                        <div className='details_kernel_cell_title'>Quick Calls</div>
                        <div className='details_kernel_cell_content'>
                            <span id='icon'>
                                <FontAwesomeIcon icon={faPhoneFlip} rotation={270} size={"xl"} color={"#ff7b25"}/>
                            </span>
                            <div id='number'>
                                <span>+(90)-553-458-37-41</span>
                                <span style={{color:"#ff7b25"}}>Chief of department</span>
                            </div>
                        </div>
                    </div>


                    <div>Two</div>
                    <div>Three</div>
                    <div>Four</div>
                    <div>Five</div>
                    
            </div>
        </div>
     );
}
 
export default Details;