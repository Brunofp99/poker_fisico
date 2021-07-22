import React, { useState } from 'react'
import { View, Column } from './style'
import Actions from '../../Components/Actions'
import Table from '../../Components/Table'
import { Container, Row, Col } from 'react-bootstrap'
import TableImage from '../../Images/table.png'

function Game() {
  const [rounds, setRounds] = useState({round: 0})
  let styleContainer= {
    'font-family': 'Dela Gothic One',
    'background': 'radial-gradient(#636463, #131313 )',
    'max-width': '100%'
  }
  return (
    <Container style={styleContainer}>
      <Row style={{'width': '100%', 'height': '90vh','max-width': '100%', 'max-height': '90vh'}}>
        <Col xs={12} style={{'background-image': `url(${TableImage})`, "background-repeat": 'no-repeat', "background-position": 'center center', 'background-size': '1200px'}}>
          <Table round={rounds} setRound={setRounds}/>
        </Col>
      </Row>
      <Row style={{'background-color': 'black', 'width': '100vw', 'height': '10vh'}}>
        <Col xs={12}>
          <Actions round={rounds} setRound={setRounds} />
        </Col>
      </Row>
    </Container>
  )
}

export default Game
