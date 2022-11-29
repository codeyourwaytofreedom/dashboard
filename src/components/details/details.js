import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';


import "./details.css";
import Cell from './cell';
const Details = () => {
    return ( 
        <div className="details"> 
            <div className="details_kernel">
                    <div className="details_kernel_cell">
                        <div className='details_kernel_cell_title'><span style={{color:"darkgreen"}}>Turnover</span></div>
                        <div className='details_kernel_cell_content'>
                            <div>
                                <span>Jan-Jun:  §765.000</span><br />
                                <span>Jun-Sep:  §341.000</span>
                            </div>
                        </div>
                    </div>
                    <Cell/>
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