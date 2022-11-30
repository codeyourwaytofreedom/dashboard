<>
<Bubble 
        title = {<span className="orange" id="up">Finance </span>}          //html element
        title_detail = {<span className="turq">
                            <FontAwesomeIcon icon={faMoneyBill1Wave} size={"lg"} color={"lightgreen"} beatFade/> 
                        </span>}                        
/>

<PercentageVisual
        icon_active = {faBedPulse}                              //icon
        icon_idle = {faBed}                                     //icon
        color_active = {"red"}                                  //string color/rgb
        color_idle = {"green"}                                  //string color/rgb
        percentage1 = {75}                                      //integer
        title={"75% of single rooms occupied"}                  //string
        second_col={true}                                       //boolean
        second_icon_active = {faBedPulse}                       //icon
        second_icon_idle = {faBed}                              //icon
        second_color_active = {"red"}                           //string color/rgb
        second_color_idle = {"green"}                           //string color/rgb
        percentage2={40}                                        //integer
        second_title={"40% of single rooms occupied"}           //string
/>

<Cell 
        title={<span style={{color:"darkgreen"}}>Turnover</span>}           //html element
        content={                                                           //html element
            <div>
                <span style={{color:"crimson", fontSize:"21px"}}>2022</span><br />
                <span>Jan-Jun:  §765.000</span><br />
                <span>Jun-Sep:  §341.000</span>
            </div>
        }
/>

<Gauges back_im={gag}/>








</>