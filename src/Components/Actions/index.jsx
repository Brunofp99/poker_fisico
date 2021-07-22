import React, { useState } from 'react';
import Slider from '../Slider';
import Pot from '../Pot';
import { Container, BettingButton,  Fold, SliderControll } from './style';
import { Button } from 'react-bootstrap'

function Actions({ setRound = () => {} }) {
  const [ count, setCount ] = useState({valor: 0})
  const [ controller, setController ] = useState({total: 0})
  const [ controllerRound, setControllerRound ] = useState(1)
  const lhcbStorage = localStorage.getItem("lhcb")
  let valueLhcb

  let styleDefault = {
    'margin-right': '10px',
    'margin-left': '10px',
    'margin-top': '10px'
  }

  const apostar = () =>{
    if (count.valor === 0) {
      alert('O valor não pode ser menor que "0".')
    }else{
      let valorTodasApostas = count.valor * 3
      setController({total: (valorTodasApostas + controller.total)})
      setControllerRound(parseInt(controllerRound) + 1)
      setRound({round: controllerRound})
    
      if (lhcbStorage) {
        const dataStorage = JSON.parse(lhcbStorage)
        valueLhcb = dataStorage.lhcb
    
        let newValue = parseFloat(valueLhcb) - count.valor
        localStorage.setItem('lhcb', JSON.stringify({lhcb: newValue}))
      }
    }
  }

  return (
    <Container>
      <Button onClick={ apostar } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Pagar: { count.valor }</Button>
      <Button onClick={ correr } style={{ ...styleDefault, 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>Correr</Button>
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
