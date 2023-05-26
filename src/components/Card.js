import './Card.css';
import { useState } from 'react';
import arrow from '../assets/arrow.svg'

export default function Card(props){
    const [display, setDisplay] = useState(false);

    return(
        <div className='Card'>
            <img src={props.img} alt={props.alt}/>
            <div className='text'>
                <h2>{props.title}</h2>
                <p className={(display ? "display" : "hide" )}>{props.text}</p>
            </div>
            <div className={'arrow '+(display ? "reverse" : "normal")} onClick={()=>setDisplay(!display)}><img src={arrow} alt='flecha'/></div>
        </div>
    )
}