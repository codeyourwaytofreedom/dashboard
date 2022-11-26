import Summary from "./summary/summary";
import Animation from "../animation/animation";
import Background from "./hotel.jpeg";


const Panel = () => {
    const image = require("./hotel.jpeg")
    return ( 
        <div className="Panel-comp" style={{backgroundImage: `url(${Background})`}}>
            <img src="" alt="" />
            <Summary/>

        </div>
     );
}
 
export default Panel;