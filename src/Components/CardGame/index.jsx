import React from 'react'
import { Container, Image } from './style'
import costas from '../../Images/costas.jpg'

function Card({ image = costas }) {

  return (
    <Container background={{main: 'white'}} >
      <Image src={image} alt=""/>
    </Container>
  )
}

export default Card