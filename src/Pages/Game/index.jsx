import React, { useState } from 'react'
import { Container, View, Column, Row } from './style'
import Actions from '../../Components/Actions'
import Table from '../../Components/Table'

function Game() {
  const [rounds, setRounds] = useState({round: 0})
  return (
    <Container>
      <View>
        <Column>
          <Table round={rounds} setRound={setRounds}/>
        </Column>
        <Row>
          <Actions round={rounds} setRound={setRounds} />
        </Row>
      </View>
    </Container>
  )
}

export default Game
