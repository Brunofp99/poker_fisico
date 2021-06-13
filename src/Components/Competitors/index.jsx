import React from 'react'
import { Container, CardCompetitor, Break } from './style'
import Card from '../Card'

function Competitors({name = '', left = '', right = '', top = '', energy = '', bottom = '6%' }) {

  let config = {
    left: left,
    right: right,
    top: top
  }, 
  bottomProp = bottom,
  potCompetidor



  if(config.left === '48%'){
    bottomProp = ''
  }

  const cardsCompetitors = localStorage.getItem(`cardsCompetitors${name}`)
  const competitorsPot = localStorage.getItem(`${name}`)

  if (cardsCompetitors) {
    console.log('competidor com carta')
  }else{
    let numeroRandom1 = Math.floor(Math.random() * 52 + 1),
    numeroRandom2 = Math.floor(Math.random() * 52 + 1)
    
    if (numeroRandom1 === numeroRandom2) {
      numeroRandom2 = Math.floor(Math.random() * 52 + 1)
    }
    localStorage.setItem(`cardsCompetitors${name}`, JSON.stringify({cardOne: numeroRandom1, cardTwo: numeroRandom2}))
  }

  if (competitorsPot) {
    const dataStorage = JSON.parse(competitorsPot)
    potCompetidor =  Object.values(dataStorage)[0]
  }else{
    potCompetidor = 1000
    localStorage.setItem(`${name}`, JSON.stringify({[name]: potCompetidor}))
  }

  return (
    <>
      <Container style={config}>
        <div style={{'bottom': '6%'}}>
          <Card rightRotate={true} bottom={bottomProp} />
          <Card  leftRotate={true} bottom={bottomProp}/>

        </div>
        <CardCompetitor>
          <label htmlFor="">{name}</label>
            <Break />
          <label htmlFor="">{potCompetidor}</label>
        </CardCompetitor>
      </Container>
    </>
  )
}

export default Competitors
