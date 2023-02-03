import '../App.css'
const Square = ({val,select}) => {
    return ( 
        <div className='square' onClick={select}>
            {val}
        </div>
     );
}
 
export default Square;