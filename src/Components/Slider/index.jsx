import React, { useState } from 'react'
import { Container, Count, Input } from './style'
import { Button } from 'react-bootstrap'


function SliderComponent({controller = () =>{} }) {
  
  let [valorSlider, setValorSlider] = useState({valor: 0})
  let inicialValue = valorSlider.valor, max, min

  const lhcbStorage = localStorage.getItem("lhcb");
  const minBetStorage = localStorage.getItem("minBet");

  if (lhcbStorage) {
    const dataStorage = JSON.parse(lhcbStorage)
    const dataBetStorage = JSON.parse(minBetStorage)
    max = dataStorage.lhcb

    if (dataBetStorage !== null) {
      min = dataBetStorage.minBet
    }else{
      min = 0
    }
  }

  controller(valorSlider)
  return (
    <>
      <Container>
        <Count>{valorSlider.valor}</Count>
        <Input type="range" value={inicialValue} min={min} max={max} onChange={(e) => setValorSlider({ valor: parseFloat(e.target.value) })}/>
        <Button style={{ 'width': '10%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}} >{max}</Button> 
      </Container>
    </>
  )
}

export default SliderComponent
