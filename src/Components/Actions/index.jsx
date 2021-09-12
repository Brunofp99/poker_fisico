import React, { useState } from 'react';
import Slider from '../Slider';
import Pot from '../Pot';
import { Container, BettingButton,  Fold, SliderControll } from './style';
import { Button } from 'react-bootstrap'

function Actions({ setRound = () => {}, setDisabled = () =>{}, disabled = [] }) {
  const [ count, setCount ] = useState({valor: 0})
  const [ controller, setController ] = useState({total: 0})
  const [ controllerRound, setControllerRound ] = useState(1)
  const lhcbStorage = JSON.parse(localStorage.getItem("lhcb"))
  const CMSStorage = JSON.parse(localStorage.getItem("CMS"))
  const ALICEStorage = JSON.parse(localStorage.getItem("ALICE"))
  const ATLASStorage = JSON.parse(localStorage.getItem("ATLAS"))

  let styleDefault = {
    'margin-right': '10px',
    'margin-left': '10px',
    'margin-top': '10px'
  }

  let controllerDisabled = []

  const apostar = () =>{
    if (count.valor === 0) {
      alert('O valor não pode ser menor que "0".')
    }else{
      // armazena o valor de cada joador
      let valorLhcb = lhcbStorage.lhcb - count.valor 
      let  valorCms = CMSStorage.CMS - count.valor 
      let  valorAlice = ALICEStorage.ALICE - count.valor
      let  valorAtlas = ATLASStorage.ATLAS - count.valor
      
      //subtrai o valor se ele tiver o suficiente no pot
      valorLhcb >= 0 ? localStorage.setItem('lhcb', JSON.stringify({lhcb: valorLhcb})) : controllerDisabled.push('lhcb') 
      valorCms >= 0 ? localStorage.setItem('CMS', JSON.stringify({CMS: valorCms})) : controllerDisabled.push('cms')
      valorAlice >= 0 ? localStorage.setItem('ALICE', JSON.stringify({ALICE: valorAlice})) : controllerDisabled.push('alice')
      valorAtlas >= 0 ? localStorage.setItem('ATLAS', JSON.stringify({ATLAS: valorAtlas})) : controllerDisabled.push('atlas')
      
      setDisabled(controllerDisabled)
      setController({total: (count.valor + controller.total)})
      setControllerRound(parseInt(controllerRound) + 1)
      setRound({round: controllerRound})
    }
  }

  const apostaBig = () =>{
  }

  const apostaSmall = () =>{

  }

  return (
    <Container>
      <Button onClick={ apostar } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Pagar: { count.valor }</Button>
      <Button onClick={ correr } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Correr</Button>
      <Button onClick={ apostaBig } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Big</Button>
      <Button onClick={ apostaSmall } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Small</Button>
      <Pot bet={controller.total} />
      <SliderControll>
        <Slider  controller={ setCount }/>
      </SliderControll>
      <Button onClick={ refreshAll } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Recomeçar Jogo</Button>
    </Container>
  )
}

const refreshAll = ()=>{
  localStorage.clear();
  window.location.reload(true);
}

const correr = ()=>{
  localStorage.removeItem('cardsTable')
  localStorage.removeItem('cards')
  localStorage.removeItem('cardsCompetitorsALICE')
  localStorage.removeItem('cardsCompetitorsATLAS')
  localStorage.removeItem('cardsCompetitorsCMS')
  window.location.reload(true)
}

export default Actions
