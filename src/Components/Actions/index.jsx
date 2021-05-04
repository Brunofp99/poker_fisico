import React, { useState } from 'react'
import Slider from '../Slider'
import Pot from '../Pot'
import { Container, BettingButton, AllIn, Fold, SliderControll } from './style'

function Actions() {
  const [ count, setCount ] = useState({valor: 0})
  const [ controller, setController ] = useState({total: 0})

  let dobro

  const apostar = () =>{
    setController({total: (count.valor + controller.total)})
  }
 
  return (
    <Container>
      <BettingButton onClick={apostar}>Pagar: { count.valor }</BettingButton>
      <AllIn >Aumentar: {dobro}</AllIn>
      <Fold >Correr</Fold>
      <Pot bet={controller.total} />
      <SliderControll>
        <Slider  controller={setCount}/>
      </SliderControll>
    </Container>
  )
}

export default Actions
