import React from 'react'
import { Container, Image } from './style'
import cartas from '../../Images'

function CardsTable({ index = null, classControll }) {

  return (
    <Container hidden={classControll}>
      {
        cartas.map((value, i, array)=>{
          if (i === index && value.info !== true) {
            return <Image src={value.image} alt="Não foi possível carregar a imagem"/>
          }
        })
      }
    </Container>
  )
}

export default CardsTable