import React from 'react'
import { Container, Image } from './style'
import costas from '../../Images/costas.jpg'

function CardsTable({ image = '', name}) {

  return (
    <Container>
      <Image src={costas} alt=""/>
    </Container>
  )
}

export default CardsTable