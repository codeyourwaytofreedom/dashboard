import Finance from "../finance/finance";
import Bubble from "./bubble/bubble";


const Panel = () => {
    const image_horizontal = require("./hotel.jpeg")


    return ( 
        <div className="Panel-comp" style={{backgroundImage:`url(${image_horizontal})`}}>
            <div className="bubbles">
                <div className="one">
                    <div className="one_kernel">
                        <Finance/>
                   </div>
                </div>
                <div className="two">
                    <div className="two_kernel">
                        TWO
                    </div>
                </div>
                <div className="three">
                    <div className="three_kernel">
{/*                         <Bubble/>
 */}                    </div>
                </div>
                <div className="four">
                    <div className="four_kernel">
                        FOUR
                    </div>
                </div>
                <div className="five">
                    <div className="five_kernel">
                        <Bubble/>
                    </div>
                </div>
            </div>
            

        </div>
     );
}
 
export default Panel;