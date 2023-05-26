import back from "../assets/back.svg";
import { Link } from "react-router-dom";
import './Back.css'

export default function Back(props){
    return(
        <Link to={props.to} className="Back">
            <div>
                <img src={back} alt="flecha hacia atrás"/>
                <p>Atrás</p>
            </div>
        </Link>
    )
}