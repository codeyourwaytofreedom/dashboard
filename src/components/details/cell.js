



const Cell = ({title, content}) => {
    return ( 
        <div className="details_kernel_cell">
                        <div className='details_kernel_cell_title'>{title}</div>
                        <div className='details_kernel_cell_content'>{content}</div>
                    </div>
     );
}
 
export default Cell;