import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip, faBedPulse, faBed} from '@fortawesome/free-solid-svg-icons';

import "./details.css";
import Cell from './cell';
import PercentageVisual from './percentagevisual';
const Details = ({details}) => {
    const gag = require("./gauge.png")

    return ( 
        <div className="details"> 
            <div className="details_kernel">
                { details === "finance" && 
                    <>
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

                    <Cell 
                        title={<span style={{color:"darkgreen"}}>Quick Calls</span>}
                        content={
                            <div>
                                <span id='icon'>
                                <FontAwesomeIcon icon={faPhoneFlip} rotation={270} size={"xl"} color={"#ff7b25"}/>
                            </span>
                            <div id='number'>
                                <span>+(90)-553-458-37-41</span>
                                <span style={{color:"#ff7b25"}}>Chief of department</span>
                            </div>
                            </div>
                        }
                    />
                    </>
                }

                {
                    details === "visitors" &&

                    <div className='gauges'>
                        <div className='gauge' style={{backgroundImage:`url(${gag})`}}>
                            <img src={require("./needle.png")} alt="needle" id='gauge1' />
                            <div className='data'>
                                    <span className='span_top' style={{color:"crimson"}}>Russian</span>
                                    <span className='span_bottom' style={{color:"yellow"}}>7.865</span>                                
                            </div>
                        </div>
                        <div className='gauge' style={{backgroundImage:`url(${gag})`}}>
                            <img src={require("./needle.png")} alt="needle" id='gauge2' />
                            <div className='data'>
                                    <span className='span_top' style={{color:"crimson"}}>Dutch</span>
                                    <span style={{color:"yellow"}}>7.312</span>                                
                            </div>
                        </div>
                        <div className='gauge' style={{backgroundImage:`url(${gag})`}}>
                            <img src={require("./needle.png")} alt="needle" id='gauge3' />
                            <div className='data'>
                                    <span className='span_top' style={{color:"crimson"}}>British</span>
                                    <span style={{color:"yellow"}}>6.990</span>                                
                            </div>
                        </div>
                    </div>
                }

                {
                    details ==="occupancyrate" &&

                    <PercentageVisual
                        icon_active = {faBedPulse}
                        icon_idle = {faBed}
                        color_active = {"red"}
                        color_idle = {"green"}
                        percentage1 = {75}
                        title={"75% of single rooms occupied"}
                        second_col={true}
                        second_icon_active = {faBedPulse}
                        second_icon_idle = {faBed}
                        second_color_active = {"red"}
                        second_color_idle = {"green"}
                        percentage2={40}
                        second_title={"40% of single rooms occupied"}
                    />
                }
                    
            </div>
        </div>
     );
}
 
export default Details;