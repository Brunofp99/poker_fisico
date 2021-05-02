import React from 'react'
import { Container } from './style'

function UserPanel({ energy = 1000}) {
  return (
    <Container>
      <label htmlFor="">LHC</label>
        <div className="break" style={{'flex-basis': '100%', 'height': '1px', 'background-color': '#F7F7F7',  'box-shadow': '5px 1px 17px #ffffff'}}></div>
      <label htmlFor="">{energy}</label>
    </Container>
  )
}

export default UserPanel
