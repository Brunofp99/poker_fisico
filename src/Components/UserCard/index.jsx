import React from 'react'
import Card from '../CardGame'
import cartas from '../../Images'
import { useController } from '../../Providers/Controller'

function UserCard() {
  let numeroRandom1, numeroRandom2
  
  const { data, setData } = useController()
  
  const cardsStorage = localStorage.getItem("cards");
  
  if (cardsStorage) {
    const dataStorage = JSON.parse(cardsStorage)
    numeroRandom1 = dataStorage.cardOne
    numeroRandom2 = dataStorage.cardTwo
  } else {
    numeroRandom1 = Math.floor(Math.random() * 52 + 1)
    numeroRandom2 = Math.floor(Math.random() * 52 + 1)
    
    if (numeroRandom1 === numeroRandom2) {
      numeroRandom2 = Math.floor(Math.random() * 52 + 1)
    }
    setData({...data, cardOne: numeroRandom1, cardTwo: numeroRandom2});
    localStorage.setItem('cards', JSON.stringify({cardOne: numeroRandom1, cardTwo: numeroRandom2}))
  }

  return (
    <>
      {
        cartas.map((carta, i) =>{
          if((carta.id === numeroRandom1 && carta.info !== true) || (carta.id === numeroRandom2 && carta.info !== true)){
            return (<Card key={carta.id} image={carta.image} />) 
          }
        })
      }
    </>
  )
}

export default UserCard
