import React from 'react'
import { Container } from './style'
import {Button} from 'react-bootstrap'

function Pot({bet = 0}) {
  let total = 0, sum = bet

  total = sum + total

  localStorage.setItem('pot', total)

  return (
    <Button style={{'margin-right': '5px','margin-left': '5px','margin-top': '5px', 'width': '30%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c'}}>
        <span>Pot:</span>
        { total }
    </Button>
  )
}

export default Pot
