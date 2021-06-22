import React, { useState } from 'react'
import Slider from '../Slider'
import Pot from '../Pot'
import { Container, BettingButton,  Fold, SliderControll } from './style'
import startCheckWinner from '../../Controller/Winner'

function Actions({ setRound = () => {} }) {
  const [ count, setCount ] = useState({valor: 0})
  const [ controller, setController ] = useState({total: 0})
  const [ controllerRound, setControllerRound ] = useState(1)
  const lhcbStorage = localStorage.getItem("lhcb")
  let valueLhcb

  const apostar = () =>{
    if (count.valor === 0) {
      alert('O valor não pode ser menor que "0".')
    }else{
      setController({total: (count.valor + controller.total)})
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
      <BettingButton onClick={ apostar }>Pagar: { count.valor }</BettingButton>
      <Fold onClick={ correr }>Correr</Fold>
      <Pot bet={controller.total} />
      <SliderControll>
        <Slider  controller={ setCount }/>
      </SliderControll>
      <BettingButton onClick={ refreshAll }>Recomeçar Jogo</BettingButton>
    </Container>
  )
}

const refreshAll = ()=>{
  localStorage.clear();
  window.location.reload(true);
}

const correr = ()=>{
  startCheckWinner()
  localStorage.removeItem('cardsTable')
  localStorage.removeItem('cards')
  localStorage.removeItem('cardsCompetitorsALICE')
  localStorage.removeItem('cardsCompetitorsATLAS')
  localStorage.removeItem('cardsCompetitorsCMS')
  window.location.reload(true)
}

export default Actions
