import "./bubble.css";



const Bubble = ({title, title_detail, bubble_up}) => {

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