import React, { useState } from 'react'
import Slider from '../Slider'
import Pot from '../Pot'
import { Container, BettingButton, AllIn, Fold, Counter } from './style'

function Actions() {
  const [ count, setCount ] = useState({valor: 0})
  const [ controller, setController ] = useState({total: 0})

  const apostar = () =>{
    setController({total: (count.valor + controller.total)})
  }
 
  return (
    <Container>
      <BettingButton onClick={apostar}>Apostar: { count.valor }</BettingButton>
      <AllIn >Allin</AllIn>
      <Fold >Desistir</Fold>
      <Pot bet={controller.total} />
      <div className="controll">
        <Slider  controller={setCount}/>
      </div>
    </Container>
  )
}

export default Actions
