



const Summary = () => {
    const grid_col = 4

    return ( 
        <div className="Summary-comp" style={{gridTemplateColumns: `repeat(${grid_col},1fr)`}}>
            <div className="Summary-comp_cell">CELL</div>
            <div className="Summary-comp_cell" id="two">CELL</div>
            <div className="Summary-comp_cell" id="three">CELL</div>
            <div className="Summary-comp_cell">CELL</div>
        </div>
     );
}
 
export default Summary;