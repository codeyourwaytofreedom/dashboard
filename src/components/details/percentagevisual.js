import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed, faBedPulse } from '@fortawesome/free-solid-svg-icons';

const PercentageVisual = ({percentage1,percentage2, icon_active, icon_idle,color_active,
                            color_idle,title,second_title,second_col,second_icon_active,second_icon_idle}) => {
    return ( 
        <div className='occupancyrate'>
                        <div className='singlerooms'>
                            <div className='explain'>
                                {title}
                            </div>
                            <div className='beds'>
                            {
                                [...Array(10)].map((e, index) => 
                                    <div className='bed'><FontAwesomeIcon color={index<parseInt(percentage1/10) ? color_active : color_idle} 
                                        icon={index<parseInt(percentage1/10) ? icon_active  : icon_idle}size={"3x"}/></div>
                                    )
                            }
                            </div>
                        </div>

                        {
                            second_col &&
                            <div className='doublerooms'>
                                <div className='explain'>
                                    {second_title}
                                </div>
                            <div className='beds'>
                            {
                                [...Array(10)].map((e, index) => 
                                    <div className='bed'><FontAwesomeIcon color={index<parseInt(percentage2/10) ? "red" : "green"} 
                                        icon={index<parseInt(percentage2/10) ? second_icon_active  : second_icon_idle}size={"3x"}/></div>
                                    )
                            }
                            </div>
                            </div>
                        }
                        
        </div>
     );
}
 
export default PercentageVisual;