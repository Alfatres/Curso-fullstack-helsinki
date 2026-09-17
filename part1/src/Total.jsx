const Total = (props) => {
    return ( <div>
        Total: <strong>{props.cantidad[0].exercises + props.cantidad[1].exercises + props.cantidad[2].exercises}</strong>
    </div> );
}
 
export default Total;