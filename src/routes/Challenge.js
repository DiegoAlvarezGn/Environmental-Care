import "./Challenge.css";
import { useState } from "react";
import Window from "../components/Window";
import Back from "../components/Back";

export default function Challenge(){
    var challenges = [
        {
          "title": "Desafío: Sin plástico por una semana",
          "text": "¿Te animas a evitar el uso de plástico durante una semana completa? Lleva tu propia bolsa reutilizable, botella de agua y utensilios, y evita productos envueltos en plástico. ¡Demostremos que podemos vivir sin él!"
        },
        {
          "title": "Desafío: Día sin carne",
          "text": "¿Te unes a adoptar una dieta vegetariana durante un día a la semana? Al reducir nuestro consumo de carne, estamos contribuyendo a disminuir la huella de carbono y a promover prácticas más sostenibles."
        },
        {
          "title": "Desafío: Adopta una planta",
          "text": "¿Qué te parece adoptar una planta y cuidarla en tu hogar o en un espacio comunitario? Te sorprenderás de los beneficios que aporta al purificar el aire y de la conexión que podrás sentir con la naturaleza."
        },
        {
          "title": "Desafío: Caminata o bicicleta al trabajo",
          "text": "¿Te atreves a dejar el automóvil en casa y utilizar medios de transporte sostenibles como caminar, andar en bicicleta o utilizar el transporte público para ir al trabajo o a la escuela? ¡Es una forma activa de cuidar el planeta!"
        },
        {
          "title": "Desafío: Apaga y desconecta",
          "text": "¿Qué tal si apagas los dispositivos electrónicos y desconectas los electrodomésticos cuando no los estés utilizando? Reducirás tu consumo de energía y contribuirás al ahorro de recursos. ¡Cada pequeño gesto cuenta!"
        },
        {
          "title": "Desafío: Ducha de 5 minutos",
          "text": "¿Te sumas al reto de tomar duchas más cortas, limitándolas a 5 minutos? Al reducir el tiempo de ducha, estarás ahorrando agua y promoviendo su uso eficiente. ¡Verás que es posible!"
        },
        {
          "title": "Desafío: Recicla y reutiliza",
          "text": "¿Estás listo para implementar un sistema de reciclaje en tu hogar y encontrar formas creativas de reutilizar objetos en lugar de desecharlos? Juntos, podemos marcar la diferencia y reducir la cantidad de residuos que generamos."
        },
        {
          "title": "Desafío: Compra local y orgánico",
          "text": "¿Te gustaría apoyar a los agricultores y productores locales mientras promovemos prácticas agrícolas sostenibles? Opta por comprar productos locales y orgánicos, ¡y descubre lo deliciosos que pueden ser!"
        },
        {
          "title": "Desafío: Planta un árbol",
          "text": "¿Qué te parece participar en actividades de reforestación o plantar un árbol en tu entorno? Los árboles absorben el dióxido de carbono y mejoran la calidad del aire. ¡Hagamos que nuestro planeta respire mejor!"
        },
        {
          "title": "Desafío: Basura cero",
          "text": "¿Estás dispuesto a reducir al máximo la generación de residuos? Lleva tu botella reutilizable, utiliza bolsas de tela y evita los productos desechables. ¡Juntos podemos lograr un impacto positivo en el medio ambiente!"
        },
        {
          "title": "Desafío: Día sin papel",
          "text": "Desafía a las personas a reducir su consumo de papel durante un día completo. Pueden optar por recibir facturas electrónicas, utilizar notas digitales en lugar de papel y evitar imprimir documentos innecesarios."
        },
        {
          "title": "Desafío: Jardín sostenible",
          "text": "Invita a las personas a crear un jardín sostenible en su hogar o comunidad, utilizando plantas nativas, recolectando agua de lluvia y evitando el uso de pesticidas y fertilizantes químicos."
        },
        {
          "title": "Desafío: Compra de segunda mano",
          "text": "Reta a las personas a comprar productos de segunda mano en lugar de nuevos. Esto reduce la demanda de recursos naturales y disminuye la cantidad de residuos generados."
        },
        {
          "title": "Desafío: Día de limpieza",
          "text": "Organiza un día de limpieza comunitaria en el que las personas se unan para limpiar parques, playas u otras áreas naturales. Fomenta la conciencia sobre la importancia de mantener nuestro entorno limpio."
        },
        {
          "title": "Desafío: Día de apagado de energía",
          "text": "Anima a las personas a apagar todos los dispositivos electrónicos durante un día completo y a aprovechar actividades al aire libre, leer un libro o pasar tiempo de calidad con la familia y amigos."
        },
        {
          "title": "Desafío: Minimiza el consumo de agua",
          "text": "Desafía a las personas a reducir su consumo de agua diario. Pueden reparar fugas, usar regaderas de bajo flujo, recolectar agua de lluvia para regar las plantas y evitar dejar los grifos abiertos innecesariamente."
        },
        {
          "title": "Desafío: Compostaje en el hogar",
          "text": "Invita a las personas a empezar a compostar en su hogar. Les puedes proporcionar información sobre cómo hacer compostaje con residuos de alimentos y cómo utilizar el compost en sus jardines."
        },
        {
          "title": "Desafío: Transporte compartido",
          "text": "Reta a las personas a compartir viajes en automóvil con amigos, compañeros de trabajo o vecinos. Esto reduce la cantidad de vehículos en la carretera y disminuye las emisiones de gases de efecto invernadero."
        },
        {
          "title": "Desafío: Día sin plástico de un solo uso",
          "text": "Desafía a las personas a evitar todos los productos de plástico de un solo uso durante un día completo. Esto incluye pajitas, cubiertos desechables, vasos de café y envoltorios de alimentos."
        },
        {
          "title": "Desafío: Reducir el consumo energético",
          "text": "Reta a las personas a reducir su consumo energético en el hogar. Pueden apagar luces innecesarias, utilizar bombillas de bajo consumo energético y aprovechar al máximo la luz natural durante el día."
        },
        {
          "title": "Desafío: Educación ambiental",
          "text": "Invita a las personas a aprender más sobre el medio ambiente y compartir sus conocimientos con los demás. Pueden investigar temas como el cambio climático, la biodiversidad o la gestión de residuos y difundir información a través de redes sociales o charlas comunitarias."
        },
        {
          "title": "Desafío: Consumo responsable",
          "text": "Anima a las personas a reflexionar sobre sus hábitos de consumo y a reducir la compra de productos innecesarios. Pueden optar por reparar objetos en lugar de reemplazarlos, compartir herramientas y recursos con la comunidad, y elegir productos duraderos y de calidad."
        },
        {
          "title": "Desafío: Voluntariado ambiental",
          "text": "Reta a las personas a participar en actividades de voluntariado relacionadas con el medio ambiente, como la reforestación, la limpieza de áreas naturales, la educación ambiental o la conservación de especies en peligro."
        },
        {
          "title": "Desafío: Cocina sostenible",
          "text": "Desafía a las personas a adoptar prácticas de cocina más sostenibles, como reducir el desperdicio de alimentos, utilizar ingredientes locales y de temporada, y cocinar en lotes para ahorrar energía."
        },
        {
          "title": "Desafío: Energía renovable",
          "text": "Anima a las personas a explorar formas de utilizar energía renovable en sus hogares, ya sea instalando paneles solares, utilizando calentadores solares de agua o cambiando a proveedores de energía renovable."
        },
        {
          "title": "Desafío: Consumo de agua de un día",
          "text": "Desafía a las personas a reducir su consumo de agua a un máximo de 40 litros durante un día completo. Esto implica ser conscientes de cada uso de agua y encontrar formas creativas de conservarla."
        },
        {
          "title": "Desafío: Desperdicio cero",
          "text": "Reta a las personas a reducir al mínimo su producción de residuos durante una semana. Pueden optar por comprar a granel, llevar su propia taza y recipiente para llevar alimentos, y utilizar productos reutilizables en lugar de desechables."
        },
        {
          "title": "Desafío: Educación ambiental",
          "text": "Invita a las personas a aprender más sobre el medio ambiente y a compartir sus conocimientos con los demás. Pueden investigar temas como el cambio climático, la biodiversidad o la gestión de residuos y difundir información a través de redes sociales o charlas comunitarias."
        },
        {
          "title": "Desafío: Reducción de emisiones de carbono",
          "text": "Reta a las personas a reducir su huella de carbono al cambiar a formas de transporte más sostenibles, como caminar, andar en bicicleta o utilizar el transporte público. También pueden considerar la opción de compensar sus emisiones de carbono a través de proyectos de conservación forestal o energías renovables."
        },
        {
          "title": "Desafío: Huerto urbano",
          "text": "Anima a las personas a cultivar sus propios alimentos en un huerto urbano, ya sea en su jardín, balcón o incluso en macetas en el interior. Además de disfrutar de alimentos frescos y saludables, contribuirán a la seguridad alimentaria y a la reducción de emisiones asociadas al transporte de alimentos."
        },
        {
          "title": "Desafío: Eco-turismo",
          "text": "Desafía a las personas a elegir destinos turísticos que promuevan el turismo sostenible y respetuoso con el medio ambiente. Pueden optar por alojamientos eco-friendly, actividades al aire libre y apoyar a las comunidades locales."
        }
      ];

    const [visible, setVisible] = useState(false);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomIndex = getRandomInt(0, challenges.length - 1);

    var randomElement = challenges[randomIndex];

    return(
        <div className="main-wrapper">
            <div className="container Challenge">
                <div className="back">
                {
                    visible ? (<Window text={randomElement.text} onClick={()=>setVisible(false)}/> ) : (<button onClick={()=>setVisible(true)}>Conoce tu reto</button>)
                }
                </div>
            </div>
            <Back to="/home"/>
        </div>   
    );
}