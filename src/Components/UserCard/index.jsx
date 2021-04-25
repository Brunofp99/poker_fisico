import React from 'react'
import Card from '../Card'
import { cartas } from '../../Images'

function UserCard() {
  let numeroRandom1 = Math.floor(Math.random() * 55 + 1),
  numeroRandom2 = Math.floor(Math.random() * 55 + 1)
  return (
    <>
      {
        cartas.map((carta, i) =>{
          if(carta.info === true || numeroRandom2 === numeroRandom1){
            numeroRandom1 = Math.floor(Math.random() * 55 + 1)
          }
          if(carta.id === numeroRandom1 && carta.info !== true){
            return (<Card key={carta.id} image={carta.image} />) 
          }
        })
      }
      {
        cartas.map((carta, i) =>{
          if(carta.info === true || numeroRandom1 === numeroRandom2){
            numeroRandom2 = Math.floor(Math.random() * 55 + 1)
          }
          if(carta.id === numeroRandom2 && carta.info !== true){
            return (<Card key={carta.id} image={carta.image} />) 
          }
        })
      }
    </>
  )
}

export default UserCard
