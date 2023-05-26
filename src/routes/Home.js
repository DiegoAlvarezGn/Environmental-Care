import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../routes/Home.css'
import Thing from '../components/Thing'
import recycling from '.././assets/recycling.svg'
import bicycle from '.././assets/bicycle.svg'
import solar from '.././assets/solar.png'
import tree from '.././assets/tree.svg'
import astronaut from '.././assets/astronaut.png'

export default function Home(){
    return (
        <Fragment>
            <div className='main-wrapper'>
                <div className='Home'>
                    <Thing img={recycling} alt="Logo de reciclaje" className="Thing"></Thing>
                    <Thing img={bicycle} alt="Bicicleta" className="Thing bigger-thing"></Thing>
                    <Thing img={tree} alt="Árbol" className="Thing bigger-thing"></Thing>
                    <Thing img={solar} alt="Panel solar" className="Thing"></Thing>
                    <Thing img={astronaut} alt="Astronauta" className="Thing extra-thing" ></Thing>

                    <h1>Elige tu misión</h1>
                    <ul>
                        <li><Link className='link' to={'environment'}>Conocer la importancia del medio ambiente</Link></li>
                        <li><Link className='link' to={'calculator'}>Calcular mi impacto de huella de carbono</Link></li>
                        <li><Link className='link' to={'profit'}>Conocer las ganancias de reciclar</Link></li>
                        <li><Link className='link' to={'challenge'}>Descubrir mi reto semanal</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}