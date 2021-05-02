import React from 'react'
import { Container } from './style'

function Pot({bet = 0}) {
  let total = 0, sum = bet

  total = sum + total

  return (
    <Container>
        <div>Pot:</div>
        { total }
    </Container>
  )
}

export default Pot
