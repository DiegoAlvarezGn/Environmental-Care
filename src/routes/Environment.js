import { Fragment } from "react";
import '../routes/Environment.css'
import Card from "../components/Card";
import { Note } from "../models/Note";
import glass from "../assets/glass.jpg";
import plastic from "../assets/plastic.jpg";
import light from "../assets/light.jpg";
import trees from "../assets/trees.jpg";
import aluminium from "../assets/aluminium.jpg";
import gases from "../assets/gases.jpg";
import trash from "../assets/trash.jpg";
import deforestation from "../assets/deforestation.jpg";
import fishes from "../assets/fishes.jpg";
import dodo from "../assets/dodo.jpg";
import whitePaint from "../assets/whitePaint.jpg";
import water from "../assets/water.jpg";
import paper from "../assets/paper.jpg";
import bottels from "../assets/bottels.jpg";
import Back from "../components/Back";


export default function Environment() {

    const notes = [
        new Note(
            glass,
            'botellas de vidrio',
            'El impacto duradero del vidrio',
            "Puede tomarle a una botella de vidrio más de un millón de años descomponerse en el medio ambiente, posiblemente incluso más si está en un vertedero. Esto significa que el vidrio fabricado y utilizado hace 5000 años aún puede estar presente en el medio ambiente. Debido a que su ciclo de vida es tan largo y porque el vidrio no libera ninguna sustancia química, es mejor reutilizarlo y utilizarlo una y otra vez antes de reciclarlo."
        ),
        new Note(
            plastic,
            'plástico en el mar',
            'El plástico, causante de asfixia y muerte en el océano',
            "El 78% de los mamíferos marinos están en riesgo de asfixiarse con plástico. De manera accidental. Las bolsas de plástico y otros desechos plásticos que terminan en el océano matan a más de 1 millón de animales marinos cada año."
        ),
        new Note(
            light,
            'bombillas de luz',
            'Energía del vidrio',
            "Reciclar una botella de vidrio ahorra suficiente energía como para alimentar una bombilla normal durante aproximadamente cuatro horas. Aunque el vidrio no se descompone fácilmente, reciclarlo podría ser más beneficioso para el medio ambiente. "
        ),
        new Note(
            trees,
            'árboles',
            '6 veces más verde',
            "El papel proviene de los árboles y puede ser reciclado un máximo de seis veces, después de lo cual sus fibras se debilitan demasiado como para mantenerse unidas. Esto significa que, si la tirada diaria de una revista o periódico popular de cualquier país se reciclara, se podrían salvar aproximadamente 75,000 árboles."
        ),
        new Note(
            aluminium,
            'botella de aluminio',
            '¡El aluminio puede ser reciclado infinitamente!',
            "A diferencia del papel, que tiene un límite en cuanto a las veces que puede ser reciclado, el aluminio puede ser reciclado infinitamente. Reciclar una lata de aluminio produce suficiente energía como para alimentar un televisor durante tres horas."
        ),
        new Note(
            gases,
            'gases de efecto invernadero',
            'Los gases de efecto invernadero son buenos... hasta cierto punto',
            "El exceso de gases de efecto invernadero contribuye al calentamiento global, lo que provoca el derretimiento de los polos y un aumento en los niveles del mar, así como la desertificación, las sequías, las inundaciones, los incendios forestales y las olas de calor. Se estima que las emisiones globales de gases de efecto invernadero han aumentado aproximadamente un 50% desde 1990. Sin embargo, en cantidades adecuadas, los gases de efecto invernadero atrapan el calor en la atmósfera de la Tierra, manteniéndola cálida para favorecer la supervivencia de los seres humanos, animales y plantas."
        ),
        //
        new Note(
            trash,
            'basura en el océano',
            'La Isla de basura',
            "La Gran Mancha de Basura en el Pacífico es un vórtice retorcido compuesto por basura  y desechos. Tiene el doble del tamaño de América continental y contiene alrededor de 100 millones de toneladas de basura. Se extiende desde la costa oeste de América del Norte hasta Japón a lo largo del océano Pacífico."
        ),
        new Note(
            deforestation,
            'deforestación',
            'Afectaciones a la superficie del planeta',
            "Aproximadamente el 83% de la superficie terrestre de la Tierra ha sido afectada por la actividad humana, lo que amenaza a las especies vegetales y animales. Esto se debe a factores como la deforestación y la explotación insostenible de los recursos de la Tierra."
        ),
        new Note(
            fishes,
            'peces',
            'Más plástico que peces en el año 2050',
            "Actualmente se estima que existen alrededor de 3.500 billones de peces en los océanos. Aunque esta cifra puede parecer abrumadora, se debe tener en cuenta que cada segundo se arrojan 200 toneladas de plástico a los fondos marinos. Esto ha revelado una preocupante proyección: para el año 2050, la cantidad de plástico superará la de peces, lo que supondrá una grave amenaza para la vida marina. Además, los arrecifes de coral podrían sufrir una devastación total."
        ),
        new Note(
            dodo,
            'dodo',
            'Extinción de especies',
            "Los expertos en el campo de la ciencia sostienen que, lamentablemente, se espera que hasta el 50% de las especies existentes en nuestro planeta se extingan para finales de este siglo. Esta alarmante cifra nos hace reflexionar sobre el impacto de la actividad humana en la biodiversidad. Los científicos han identificado que la actividad humana, incluyendo la deforestación, la contaminación, el cambio climático y la sobreexplotación de recursos, es una de las principales causas de esta pérdida masiva de especies."
        ),
        new Note(
            whitePaint,
            'pintor',
            'Pintar de Blanco para un Ambiente Sostenible',
            "La pintura del techo de las viviendas en color blanco es una estrategia eficaz y económica para combatir el calor en las ciudades, al mismo tiempo que contribuye a la reducción de las emisiones de carbono. Esta iniciativa no solo ayuda a disminuir la necesidad de  utilizar electrodomésticos como el aire acondicionado, sino que también promueve un ambiente más sostenible y confortable."
        ),
        //
        new Note(
            water,
            'grifo',
            'El Ahorro en un Gesto',
            "La fuga de una llave puede resultar en un desperdicio de hasta 30 litros de agua diarios, lo que equivale a seis garrafones llenos. Sin embargo, un simple acto como asegurarse de cerrar correctamente el grifo puede generar un ahorro significativo en el consumo de agua."
        ),
        new Note(
            paper,
            'hojas de papel',
            'El Poder del Reciclaje de Papel',
            "Reciclar una tonelada de papel evita la deforestación de alrededor de 13 árboles, al mismo tiempo que ahorra 50.000 litros de agua y el equivalente a 3 barriles de petróleo. Estos impactantes números muestran el poder del reciclaje del papel para preservar los recursos naturales y reducir el impacto ambiental."
        ),
        new Note(
            bottels,
            'latas de aluminio',
            '20 veces más sostenible',
            "La producción de una lata de metal desde cero requiere la misma cantidad de energía que se necesita para fabricar 20 latas recicladas. Esto resalta el potencial impacto positivo del reciclaje en la conservación de energía y la reducción del consumo de recursos naturales."
        ),
    ]

    const references = [
        'https://kpwb.org/environmental-fun-facts-2/',
        'https://www.conserve-energy-future.com/environment-facts.php',
        'https://www.funkidslive.com/learn/top-10-facts/top-10-facts-about-the-environment/',
        'https://okdiario.com/ciencia/datos-mas-curiosos-que-no-sabias-sobre-medio-ambiente9178965',
        'https://mott.pe/noticias/15-datos-acciones-y-consejos-para-la-conservacion-delcuidado-del-medio-ambiente/',
        'https://www.moltexbaby.com/es/tu-peque-y-tu/curiosidades/curiosidades-sobre-elmedio-ambiente-y-la-ecologia-para-ninos/'
    ]

  return (
    <Fragment>
        <div className="main-wrapper">
            <div className="container Environment">
                
                <h1 className="title-section">Misión: Conoce y haz conciencia</h1>
                <div className="card-container">
                    {
                        notes.length ? (
                            notes.map(note => <Card img={note.img} alt={note.alt} title={note.title} text={note.text}></Card>)
                        ) : (<h2>No hay información</h2>)
                    }
                </div>
                <div className="references">
                    <span>Fuentes</span>
                    {references.map((reference)=><a target="_blank" href={reference}>{reference}</a>)}
                </div>
                <Back to="/home"/>
            </div> 
        </div>
    </Fragment>
  );
}
