import '../components/Leaf.css'

export default function Leaf(props){
    return(
        <img src={props.img} alt={props.alt} className={props.className}/>
    )
}