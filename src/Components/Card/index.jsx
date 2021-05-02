import React from 'react'
import { Container, Image } from './style'
import costas from '../../Images/costas.jpg'
// import carta from '../../Images/Cartas/antiBottomYellow.png'

function Card({ image = costas, name, leftRotate = false, rightRotate = false, bottom = '', top = '', left = '' }) {
  let deg = 'none', margin = ''

  if(leftRotate) deg = 'rotate(-10deg)'
  if(rightRotate){
    deg = 'rotate(10deg)'
    margin = '50px'
  } 

  return (
    <Container background={{main: 'white'}} theme={{rotate: deg, margin: margin, bottom: bottom}}>
      <Image src={image} alt=""/>
    </Container>
  )
}

export default Card