import React from 'react'
import { Container, CardCompetitor } from './style'
import Card from '../Card'

function Competitors({name = 'LHC', left = '', right = '', top = '', energy = '1.000', bottom = '6%'}) {

  let config = {
    left: left,
    right: right,
    top: top
  }, bottomProp = bottom


  if(config.left === '48%'){
    bottomProp = ''
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
            <div className="break" style={{'flex-basis': '100%', 'height': '1px', 'background-color': '#F7F7F7',  'box-shadow': '5px 1px 17px #ffffff'}}></div>
          <label htmlFor="">{energy}</label>
        </CardCompetitor>
      </Container>
    </>
  )
}

export default Competitors
