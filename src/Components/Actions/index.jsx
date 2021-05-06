import React, { useState } from 'react'
import Slider from '../Slider'
import Pot from '../Pot'
import { Container, BettingButton,  Fold, SliderControll } from './style'

function Actions({ round, setRound = () => {}}) {
  const [ count, setCount ] = useState({valor: 0})
  const [ controller, setController ] = useState({total: 0})
  const [ controllerRound, setControllerRound ] = useState(1)

  const apostar = () =>{
    setController({total: (count.valor + controller.total)})
    setControllerRound(parseInt(controllerRound) + parseInt(1))
    setRound({round: controllerRound})
  }

  const correr = ()=>{
    localStorage.removeItem('cardsTable')
    localStorage.removeItem('cards')
    window.location.reload()
  }
 
  return (
    <Container>
      <BettingButton onClick={apostar}>Pagar: { count.valor }</BettingButton>
      <Fold onClick={correr}>Correr</Fold>
      <Pot bet={controller.total} />
      <SliderControll>
        <Slider  controller={setCount}/>
      </SliderControll>
    </Container>
  )
}

export default Actions
