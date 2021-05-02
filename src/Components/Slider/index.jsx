import React, { useState } from 'react'
import Slider from 'react-input-slider'
import { Container, Count, Input } from './style'


function SliderComponent({controller = () =>{}, valueMax = 100, valueMin = 0}) {
  let [valorSlider, setValorSlider] = useState({valor: 0})
  let max = valueMax // - valorSlider.valor
  let min = valueMin
  let inicialValue = valorSlider.valor

  controller(valorSlider)
  return (
    <Container>
      <Count>{valorSlider.valor}</Count>
      <Input type="range" value={inicialValue} min={min} max={max} onChange={(e) => setValorSlider({ valor: parseFloat(e.target.value) })}/>
    </Container>
  )
}

export default SliderComponent
