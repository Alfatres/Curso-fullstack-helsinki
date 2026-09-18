const Total = (props) => {
    return ( <div>
        Total: <strong>{props.cantidad.partes[0].exercises + props.cantidad.partes[1].exercises + props.cantidad.partes[2].exercises}</strong>
    </div> );
}
 
export default Total;