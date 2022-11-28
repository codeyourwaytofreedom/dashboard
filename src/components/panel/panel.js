

const Panel = () => {
    const image_horizontal = require("./hotel.jpeg")


    return ( 
        <div className="Panel-comp" style={{backgroundImage:`url(${image_horizontal})`}}>
            <div className="bubbles">
                <div className="one">
                    <div className="one_kernel">
                        ONE
                    </div>
                </div>
                <div className="two">
                    <div className="two_kernel">
                        TWO
                    </div>
                </div>
                <div className="three">
                    <div className="three_kernel">
                        THREE
                    </div>
                </div>
                <div className="four">
                    <div className="four_kernel">
                        FOUR
                    </div>
                </div>
                <div className="five">
                    <div className="five_kernel">
                        FIVE
                    </div>
                </div>
{/*                 <Summary/>
                <Visitors/>
                <Finance/>
                <Visitors/>
                <Summary/> */}
            </div>
            

        </div>
     );
}
 
export default Panel;