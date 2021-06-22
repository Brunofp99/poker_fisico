import React from 'react'
import { Container } from './style'

function Pot({bet = 0}) {
  let total = 0, sum = bet

  total = sum + total

  localStorage.setItem('pot', total)

  return (
    <Container>
        <span>Pot:</span>
        { total }
    </Container>
  )
}

export default Pot
