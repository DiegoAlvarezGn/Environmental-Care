import './Thing.css'

export default function Thing(props){
    return(
        <img src={props.img} alt={props.alt} className={props.className}/>
    )
}