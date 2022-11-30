const Gauges = ({back_im}) => {
    return ( 
        <div className='gauges'>
                        <div className='gauge' style={{backgroundImage:`url(${back_im})`}}>
                            <img src={require("./needle.png")} alt="needle" id='gauge1' />
                            <div className='data'>
                                    <span className='span_top' style={{color:"crimson"}}>Russian</span>
                                    <span className='span_bottom' style={{color:"yellow"}}>7.865</span>                                
                            </div>
                        </div>
                        <div className='gauge' style={{backgroundImage:`url(${back_im})`}}>
                            <img src={require("./needle.png")} alt="needle" id='gauge2' />
                            <div className='data'>
                                    <span className='span_top' style={{color:"crimson"}}>Dutch</span>
                                    <span style={{color:"yellow"}}>7.312</span>                                
                            </div>
                        </div>
                        <div className='gauge' style={{backgroundImage:`url(${back_im})`}}>
                            <img src={require("./needle.png")} alt="needle" id='gauge3' />
                            <div className='data'>
                                    <span className='span_top' style={{color:"crimson"}}>British</span>
                                    <span style={{color:"yellow"}}>6.990</span>                                
                            </div>
                        </div>
                    </div>
     );
}
 
export default Gauges;