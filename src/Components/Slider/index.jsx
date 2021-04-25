import React, { useState } from 'react'
import Slider from 'react-input-slider'
import { Container, Count } from './style'


function SliderComponent() {
  let [valorSlider, setValorSlider] = useState({valor: 0})
  return (
    <Container>
      <Slider
        axis="y"
        ystep={1}
        ymin={0}
        ymax={100}
        y={valorSlider.valor}
        onChange={({ y }) => setValorSlider({ valor: parseFloat(y.toFixed(2)) })}
      />
      <Count>{valorSlider.valor}</Count>
    </Container>
  )
}

export default SliderComponent
