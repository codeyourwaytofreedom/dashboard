import "./overview.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';


const Overview = () => {
    return ( 
        <div className="Overview_comp">
            <span className="orange">Occupancy Rate </span>
            <span className="turq">89 <FontAwesomeIcon icon={faPercent} beatFade/> </span>
        </div>
     );
}
 
export default Overview;