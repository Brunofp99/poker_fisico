import React from 'react'
import { Container, Image } from './style'

function Card({ image = 'https://imagensemoldes.com.br/wp-content/uploads/2020/10/Sticker-Albert-Einstein-PNG.png', name, }) {

  return (
    <>
      <Container background={{main: 'white'}}>
        <Image src={image} alt=""/>
      </Container>
    </>
  )
}

export default Card