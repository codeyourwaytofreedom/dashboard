import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';

const Finance = () => {
    return ( 

        
        <div className="Bubble_comp">
            <span className="orange">Occupancy Rate </span>
            <span className="turq">89 <FontAwesomeIcon icon={faPercent} beatFade/> </span>
        </div>
     );
}
 
export default Finance;