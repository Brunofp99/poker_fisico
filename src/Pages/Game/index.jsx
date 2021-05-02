import React, { useState } from 'react'
import { 
  Container, 
  View, 
  Column, 
  Row, 
  Div, 
  CardControll, 
  Cards
} from './style'
import Card from '../../Components/Card'
import UserCard from '../../Components/UserCard'
import UserPanel from '../../Components/userPanel'
import Actions from '../../Components/Actions'
import Table from '../../Components/Table'
import img from '../../Images/costas.jpg'
import tableimg from '../../Images/table.png'

function Game() {
  const [rounds, setRounds] = useState({Round: 0})


  return (
    <Container>
      <View>

        {/* table  */}
        <Column>
          <Table />
        </Column>
        
        <CardControll>
          <UserCard />
          <UserCard />
          <UserPanel />
        </CardControll>

        <Row>
          <Actions />
        </Row>

      </View>
    </Container>
  )
}

export default Game
