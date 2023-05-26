import './Window.css'
import { useEffect, useState } from 'react'

function sleep(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
  )
}

export default function Window(props){
    const [loading, setLoading] = useState(true);

    async function sleepThread(){
        await sleep(3000);
        if(loading){
            setLoading(false);
        }
    }
    useEffect(()=>{
        sleepThread();
    },[])

    return(
        <div className="Window">
            <div className="window-background" >
                {
                    loading ? (<div class="loader"></div>) : 
                    (<div className="window-content">
                        <div className='card'>
                            <h2>{props.text}</h2>
                            <button onClick={props.onClick}>Aceptar</button>
                        </div>                                            
                    </div>)
                }
            </div>
        </div>
    )
}