import React, { useState } from 'react'
import { Container, Image, CardsOnTable } from './style'
import TableImage from '../../Images/table.png'
import CardsTable from '../CardsTable'
import Competitors from '../Competitors'

function Table({ bet = 0 }) {
  const [state, setstate] = useState()
  return (
    <Container>
      {/* player left */}
      <Competitors left='6%' top='38%' name='ATLAS' /> 

      {/* player top */}
      <Competitors left='47%' name='ALICE' />

      {/* player right */}
      <Competitors right='6%' top='38%' name='CMS' />

      <Image src={TableImage} alt=""/> 
      <CardsOnTable>
        <CardsTable />
        <CardsTable />
        <CardsTable />
        <CardsTable />
        <CardsTable />
      </CardsOnTable>
    </Container>
  )
}

export default Table
