import './Profit.css';
import Back from '../components/Back';
import MaterialForm from '../components/MaterialForm';
import bottle from "../assets/bottle.svg"
import paper2 from "../assets/paper2.svg"
import cardBoard from "../assets/cardBoard.svg"
import aluminum from "../assets/aluminum.svg"
import glass2 from "../assets/glass2.svg"
import { useState, useEffect } from 'react';

export default function Profit(){
    const pricePet = 5.52;
    const [petKg, setPetKg] = useState();
    const [totalPet, setTotalPet] = useState();
    const pricePaper = 2.33;
    const [paperKg, setPaperKg] = useState();
    const [totalPaper, setTotalPaper] = useState();
    const priceCardBoard = 1.98;
    const [cardBoardKg, setCardBoardKg] = useState();
    const [totalCardBoard, setTotalCardBoard] = useState();
    const priceGlass = 0.86;
    const [glassKg, setGlassKg] = useState();
    const [totalGlass, setTotalGlass] = useState();
    const priceAluminum = 19.71;
    const [aluminumKg, setAluminumKg] = useState();
    const [totalAluminum, setTotalAluminum] = useState();

    useEffect(() => {
        if (petKg) {
          setTotalPet(petKg * pricePet);
        }
      }, [petKg, pricePet]);
    
    function onChangePET(e) {
        setPetKg(e.target.value);
    }

    useEffect(() => {
        if (paperKg) {
          setTotalPaper(paperKg * pricePaper);
        }
      }, [paperKg, pricePaper]);
    
    function onChangePaper(e) {
        setPaperKg(e.target.value);
    }

    useEffect(() => {
        if (glassKg) {
          setTotalGlass(glassKg * priceGlass);
        }
      }, [glassKg, priceGlass]);
    
    function onChangeGlass(e) {
        setGlassKg(e.target.value);
    }

    useEffect(() => {
        if (aluminumKg) {
          setTotalAluminum(aluminumKg * priceAluminum);
        }
      }, [aluminumKg, priceAluminum]);
    
    function onChangeAluminum(e) {
        setAluminumKg(e.target.value);
    }

    useEffect(() => {
        if (cardBoardKg) {
          setTotalCardBoard(cardBoardKg * priceCardBoard);
        }
      }, [cardBoardKg, priceCardBoard]);
    
    function onChangeCardBoard(e) {
        setCardBoardKg(e.target.value);
    }

    return(
        <div className="main-wrapper">
            <div className="container Profit">   
                <header>
                    <h1 className='title-section'>Conoce tus posibles ganancias al reciclar</h1>
                </header>
                <div className='profit-content'>
                    <MaterialForm material={'PET'} onChange={(e)=>onChangePET(e)} value={petKg} image={bottle} alt={'Botella de agua'} total={totalPet} price={pricePet}></MaterialForm>
                    <MaterialForm material={'Papel'} onChange={(e)=>onChangePaper(e)} value={paperKg} image={paper2} alt={'Rollo de papel'} total={totalPaper} price={pricePaper}></MaterialForm>
                    <MaterialForm material={'Cartón'} onChange={(e)=>onChangeCardBoard(e)} value={cardBoardKg} image={cardBoard} alt={'Caja de cartón'} total={totalCardBoard} price={priceCardBoard}></MaterialForm>
                    <MaterialForm material={'Vidrio'} onChange={(e)=>onChangeGlass(e)} value={glassKg} image={glass2} alt={'Vaso de vidrio'} total={totalGlass} price={priceGlass}></MaterialForm>
                    <MaterialForm material={'Aluminio'} onChange={(e)=>onChangeAluminum(e)} value={aluminumKg} image={aluminum} alt={'Lata de aluminio'} total={totalAluminum} price={priceAluminum}></MaterialForm>
                </div>
                <Back to="/home"/>
            </div>
        </div>
    )
}