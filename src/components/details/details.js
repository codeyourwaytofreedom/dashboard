import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';


import "./details.css";
const Details = () => {
    return ( 
        <div className="details"> 
            <div className="details_kernel">
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                    <div>Four</div>
                    <div>Five</div>
                    <div className='quick_calls'>
                        <div className='quick_calls_text'>Quick Calls</div>
                        <div className='quick_calls_icon'>
                            <FontAwesomeIcon icon={faPhoneFlip} rotation={270} size={"2x"}/>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Details;