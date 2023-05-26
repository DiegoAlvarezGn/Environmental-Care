import { Link } from 'react-router-dom'
import leaf from '.././assets/leaf.svg'
import Leaf from '../components/Leaf'
import '../routes/Main.css'

export default function Main(){
    return(
        <div className="main-wrapper">
          <div className='Main'>
            <div className='modal'>
            </div>
            <Leaf className="leaf reverse-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf reverse-leaf bigger-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf reverse-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf reverse-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf bigger-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf bigger-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf bigger-leaf" img={leaf} alt='Hoja de árbol'/>
            <Leaf className="leaf reverse-leaf" img={leaf} alt='Hoja de árbol'/>

            <div className='main-question__content'>
              <label>¿Estás listo para ser un mejor habitante en el planeta Tierra?</label>
              <Link className='link' to={'/home'}><button>Vamos</button></Link>
            </div>
          </div>
      </div>      
    )
}