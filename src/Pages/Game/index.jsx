import React, { useState } from 'react'
import { 
  Container, 
  View, 
  Column, 
  Row, 
  Div, 
  ControllerDiv, 
  ControllerDivBotton, 
  Cards, 
  BettingButton, 
  AllIn, 
  Fold
} from './style'
import Card from '../../Components/Card'
import Slider from '../../Components/Slider'
import UserCard from '../../Components/UserCard'
import img from '../../Images/costas.jpg'
import Helio from '../../Images/HelioTakai.jpg'

function Game() {
  // const [carta, setCarta] = useState({carta1: '', carta2: '', valor: ''})

  // let numeroRandom1 = Math.floor(Math.random() * 55 + 1),
  //   numeroRandom2 = Math.floor(Math.random() * 55 + 1)


  const funcaoApostar = ()=>{

  }

  const funcaoApostarTudo = ()=>{

  }

  const funcaoDesistir = ()=>{

  }

  return (
    <Container>
      <View>

        {/* player top */}
        <Row>
          <Cards>
            <Card image={img}></Card>
            <Card image={img}></Card>
            {/* <BettingButton /> */}
          </Cards>
        </Row>

        {/* player left */}
        <Column>
          <Cards>
            {/* <BettingButton /> */}
            <Card image={img}></Card>
            <Card image={img}></Card>
          </Cards>
        </Column>

        {/* table  */}
        <Column>
          <Div>
            <ControllerDiv>
              <Card image={img}></Card>
              <Card image={img}></Card>
              <Card image={img}></Card>
              <Card image={img}></Card>
              <Card image={img}></Card>
              <Card image={img}></Card>
              {/* { 5 vezes cartas
                cartas.map()
              } */}
            </ControllerDiv>
          </Div>
        </Column>

        {/* player right  */}
        <Column>
          <Cards>
            <Card image={img}></Card>
            <Card image={img}></Card>
          </Cards>
          <Card img={Helio}></Card>
        </Column>

        {/* player botton  */}
        <Row> 
          <Cards>
            <ControllerDivBotton>

              <UserCard />

              <div>
                <BettingButton onClick={funcaoApostar}>Apostar</BettingButton>
                <AllIn onClick={funcaoApostarTudo}>All in</AllIn>
                <Fold onClick={funcaoDesistir}>Desistir</Fold>
              </div>

              <Slider />

            </ControllerDivBotton>
          </Cards>
        </Row>

      </View>
    </Container>
  )
}

export default Game
