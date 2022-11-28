import "./bubble.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons';


const Bubble = ({title, title_detail, bubble_up}) => {
     title = <span className="orange" id={bubble_up === true ? "up" : "down"}>Occupancy Rate </span>;
     title_detail = <span className="turq">89 <FontAwesomeIcon icon={faPercent} beatFade/> </span>;
    return ( 
        <div className="Bubble_comp">
            {title}
            {title_detail}
        </div>
     );
}
 
export default Bubble;


//before props
{/*              <span className="orange">Occupancy Rate </span>
             <span className="turq">89 <FontAwesomeIcon icon={faPercent} beatFade/> </span> */}