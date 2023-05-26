import './Calculator.css';
import Back from '../components/Back';
import calculator from '../assets/calculator.svg';
import light from '../assets/light.svg';
import home from '../assets/home.svg';
import auto from '../assets/auto.svg';
import airplane from '../assets/airplane.svg';
import { useState } from 'react';
import Window from '../components/Window';

export default function Calculator(){
    //First Section
    const [electricityUsage, setElectricityUsage] = useState();
    const [gasUsage, setGasUsage] = useState();
    const [waterUsage, setWaterUsage] = useState();
    const [foodWaste, setFoodWaste] = useState();
    const [paperUsage, setPaperUsage] = useState();
    //Second Section
    const [houseSize, setHouseSize] = useState();
    const [numberOfResidents, setNumberOfResidents] = useState();
    const [energySource, setEnergySource] = useState("electricity");
    const [energyEfficiency, setEnergyEfficiency] = useState();
    const [renewableEnergy, setRenewableEnergy] = useState();
    //Third Section
    const [carMileage , setCarMileage] = useState();
    const [publicTransportation , setPublicTransportation] = useState();
    const [bicycleUsage , setBicycleUsage] = useState();
    const [walkUsage , setWalkUsage] = useState();
    const [flightDistance , setFlightDistance] = useState();
    //Fourth Section
    const [flights  , setFlights] = useState();
    const [busDistance  , setBusDistance] = useState();
    const [trainDistance  , setTrainDistance] = useState();
    const [carpoolDistance  , setCarpoolDistance] = useState();
    const [taxiDistance  , setTaxiDistance] = useState();
    //Window
    const [visible, setVisible] = useState(false);
    const [result, setResult] = useState('');

    function calculate(){
        if(electricityUsage && gasUsage && waterUsage && foodWaste && paperUsage
            && houseSize && numberOfResidents && energySource && energyEfficiency && renewableEnergy
            && carMileage && publicTransportation && bicycleUsage && walkUsage && flightDistance
            && flights && busDistance && trainDistance && carpoolDistance && taxiDistance){
                if(energyEfficiency>10 || energyEfficiency<1){
                    alert('Error en calificar el ahorro de energía');
                    return;
                }
                const electricityEmissions = electricityUsage * 0.5; 
                const gasEmissions = gasUsage * 1.8; 
                const waterEmissions = waterUsage * 0.3; 
                const foodWasteEmissions = foodWaste * 0.9; 
                const paperEmissions = paperUsage * 2.5; 

                const housingEmissions = houseSize * 25;
                const residentsEmissions = numberOfResidents * 1500; 
                let energySourceFactor;
                switch (energySource) {
                    case 'electricity':
                    energySourceFactor = 0.7;
                    break;
                    case 'naturalGas':
                    energySourceFactor = 1.5;
                    break;
                    case 'solar':
                    energySourceFactor = 0.2;
                    break;
                    case 'wind':
                    energySourceFactor = 0.3;
                    break;
                    case 'other':
                    energySourceFactor = 1.0;
                    break;
                    default:
                    energySourceFactor = 1.0;
                }
                const energyEfficiencyFactor = energyEfficiency / 10;
                const renewableEnergyEmissions = (100 - renewableEnergy) * 0.5;

                const carEmissions = carMileage * 2.3; 
                const publicTransportEmissions = publicTransportation * 0.15; 
                const bicycleEmissions = bicycleUsage * 0.05;
                const walkEmissions = walkUsage * 0.02; 
                const flightEmissions = flightDistance * 0.18; 

                const flightsEmissions = flights * 200;
                const busEmissions = busDistance * 0.15;
                const trainEmissions = trainDistance * 0.03; 
                const carpoolEmissions = carpoolDistance * 0.1; 
                const taxiEmissions = taxiDistance * 0.2; 
                const totalEmissions = electricityEmissions + gasEmissions + waterEmissions + foodWasteEmissions + paperEmissions + housingEmissions + residentsEmissions + energySourceFactor + energyEfficiencyFactor + renewableEnergyEmissions + carEmissions + publicTransportEmissions + bicycleEmissions + walkEmissions + flightEmissions + flightsEmissions + busEmissions + trainEmissions + carpoolEmissions + taxiEmissions;
                setResult('Tu huella de carbono es '+totalEmissions.toFixed(2)+' kgCO2eq');
                setVisible(true);
            }else{
                alert('Verifica que todos los campos estén llenos');
            }
    }

    return(
        <div className="main-wrapper">
                {
                    visible ? (<Window text={result} onClick={()=>setVisible(false)}/> ) : (null)
                }
            <div className="container Calculator">   
                <header>
                    <img src={calculator} alt={'calculadora'}></img>
                    <h1 className='title-section'>Calculadora de huella de carbono</h1>
                </header>
                <div className='calculator__form'>
                    <div className='form__section'>
                        <div className='form__section__title'>
                            <h2>Consumo</h2>
                            <img src={light} alt='foco'></img>
                        </div>
                        
                        <label for="electricityUsage">Consumo diario de electricidad (en kWh):</label>
                        <input value={electricityUsage} onChange={(event)=>setElectricityUsage(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="electricityUsage" min="0"/>

                        <label for="gasUsage">Consumo mensual de gas natural (en m³):</label>
                        <input value={gasUsage} onChange={(event)=>setGasUsage(event.target.value)}  required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="gasUsage" />

                        <label for="waterUsage">Consumo diario de agua (en litros):</label>
                        <input value={waterUsage} onChange={(event)=>setWaterUsage(event.target.value)}  required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="waterUsage" />

                        <label for="foodWaste">Desperdicio semanal de alimentos (en kg):</label>
                        <input value={foodWaste} onChange={(event)=>setFoodWaste(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="foodWaste"/>

                        <label for="paperUsage">Consumo mensual de papel (en kg):</label>
                        <input value={paperUsage} onChange={(event)=>setPaperUsage(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="paperUsage"/>
                    </div>
                    <div className='form__section'>
                        <div className='form__section__title'>
                            <h2>Vivienda</h2>
                            <img src={home} alt='casa'></img>
                        </div>
                        
                        <label for="houseSize">Tamaño de la vivienda (en m²):</label>
                        <input value={houseSize} onChange={(event)=>setHouseSize(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="houseSize"/>

                        <label for="numberOfResidents">Número de residentes en la vivienda:</label>
                        <input value={numberOfResidents} onChange={(event)=>setNumberOfResidents(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="numberOfResidents"/>

                        <label for="energySource">Fuente de energía principal:</label>
                        <select value={energySource} onChange={(event)=>setEnergySource(event.target.value)} required id="energySource">
                            <option value="electricity">Electricidad</option>
                            <option value="naturalGas">Gas natural</option>
                            <option value="solar">Energía solar</option>
                            <option value="wind">Energía eólica</option>
                        </select>

                        <label for="energyEfficiency">Califica el ahorro de energía (del 1 al 10):</label>
                        <input value={energyEfficiency} onChange={(event)=>setEnergyEfficiency(event.target.value)} min="1" max="10" required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="energyEfficiency"></input>

                        <label for="renewableEnergy">Porcentaje de energía renovable utilizada:</label>
                        <input value={renewableEnergy} onChange={(event)=>setRenewableEnergy(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} type="number" id="renewableEnergy"/>
                    </div>

                    <div className='form__section'>
                        <div className='form__section__title'>
                            <h2>Viajes</h2>
                            <img src={auto} alt='auto'></img>
                        </div>
                        
                        <label for="carMileage">Consumo de gasolina del automóvil (en litros/km):</label>
                        <input value={carMileage} onChange={(event)=>setCarMileage(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}  type="number" id="carMileage"/>

                        <label for="publicTransportation">Uso diario de transporte público (en km):</label>
                        <input value={publicTransportation} onChange={(event)=>setPublicTransportation(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}  type="number" id="publicTransportation"/>

                        <label for="bicycleUsage">Uso diario de la bicicleta (en km):</label>
                        <input value={bicycleUsage} onChange={(event)=>setBicycleUsage(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}  type="number" id="bicycleUsage"/>

                        <label for="walkUsage">Uso diario de caminar (en km):</label>
                        <input value={walkUsage} onChange={(event)=>setWalkUsage(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}  type="number" id="walkUsage"/>

                        <label for="flightDistance">Distancia total de vuelo anual (en km):</label>
                        <input value={flightDistance} onChange={(event)=>setFlightDistance(event.target.value)} required onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}  type="number" id="flightDistance" />
                    </div>

                    <div className='form__section'>
                        <div className='form__section__title'>
                            <h2>Traslados</h2>
                            <img src={airplane} alt='avión'></img>
                        </div>
                        
                        <label for="flights">Cantidad de vuelos al año:</label>
                        <input value={flights} onChange={(event)=>setFlights(event.target.value)} required type="number" id="flights" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}/>

                        <label for="busDistance">Distancia semanal en autobús (en km):</label>
                        <input value={busDistance} onChange={(event)=>setBusDistance(event.target.value)} required type="number" id="busDistance" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}/>

                        <label for="trainDistance">Distancia semanal en tren (en km):</label>
                        <input value={trainDistance} onChange={(event)=>setTrainDistance(event.target.value)} required type="number" id="trainDistance" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}/>

                        <label for="carpoolDistance">Distancia semanal en carpooling(vehículo compartido) (en km):</label>
                        <input value={carpoolDistance} onChange={(event)=>setCarpoolDistance(event.target.value)} required requiredtype="number" id="carpoolDistance" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}/>

                        <label for="taxiDistance">Distancia semanal en taxi (en km):</label>
                        <input value={taxiDistance} onChange={(event)=>setTaxiDistance(event.target.value)} required type="number" id="taxiDistance" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}/>
                    </div>

                    <button onClick={calculate}>Calcular Huella de Carbono</button>
                </div>
                <Back to="/home"/>
            </div>
        </div>
    )
}