import "./MaterialForm.css"

export default function MaterialForm(props){

    return(
        <div className="MaterialForm">
            <div className="material-title">
                <h2>{props.material}</h2>
                <img src={props.image} alt={props.alt}></img>
            </div>
            <div className="material-form">
                <div className="item">
                    <p>Kg de material:</p>
                </div>
                <div className="item">
                    <p>Precio promedio pagado por kilo:</p>
                </div>
                <div className="item">
                    <p>Ganancia total aproximada:</p>
                </div>
                <input value={props.value} onChange={props.onChange} placeholder="KG" type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}></input>
                <div className="item item-prompt">
                    <p>${props.price}</p>
                </div>
                <div className="item item-prompt">
                    <p>${props.total ? props.total.toFixed(2) : null}</p>  
                </div>
            </div>
        </div>
    )
}