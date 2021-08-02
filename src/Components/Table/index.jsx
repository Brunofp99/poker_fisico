import React from 'react'
import { Container, Image, CardsOnTable } from './style'
import TableImage from '../../Images/table.png'
import CardsTable from '../CardsTable'
import Competitors from '../Competitors'
import Winner from '../../Controller/Winner'
import { Row, Col} from 'react-bootstrap'
import Modal from '../Modal'
import ModalWinner from '../ModalWinner'

function Table({ round, setRound = () =>{} }) {


  localStorage.setItem('round',JSON.stringify(round))
  let cardOne, cardTwo, cardTree, cardFour, cardFive
  let class1 = true
  let class2 = true
  let class3 = true

  const cardsTableStorage = localStorage.getItem("cardsTable")
  
  if (cardsTableStorage) {

    const {cardTableOne, cardTableTwo, cardTableTree, cardTableFour, cardTableFive} = JSON.parse(cardsTableStorage)

    cardOne = cardTableOne
    cardTwo = cardTableTwo
    cardTree = cardTableTree
    cardFour = cardTableFour
    cardFive = cardTableFive
  }else{
    cardOne = Math.floor(Math.random() * 52 + 1)
    cardTwo = Math.floor(Math.random() * 52 + 1)
    cardTree = Math.floor(Math.random() * 52 + 1)
    cardFour = Math.floor(Math.random() * 52 + 1)
    cardFive = Math.floor(Math.random() * 52 + 1)

    let checkNumber = [ cardOne, cardTwo, cardTree, cardFour, cardFive]
    let checked = []

    checkNumber.filter((valorAtual, i, array) => {
      if(!array.indexOf(valorAtual) == i){
        checked.push(Math.floor(Math.random() * 5 + 1))
      }else{
        checked.push(valorAtual)
      }
    })

    localStorage.setItem('cardsTable', JSON.stringify({cardTableOne: checked[0], cardTableTwo: checked[1], cardTableTree: checked[2], cardTableFour: checked[3], cardTableFive: checked[4]}))

  }

  if (round.round === 1 ) {
    class1 = false 
  }else if (round.round === 2 ) {
    class1 = false
    class2 = false 
  }else  if (round.round === 3 ) {
    class1 = false
    class2 = false 
    class3 = false 
  }else  if (round.round === 4 ) {
    class1 = false
    class2 = false 
    class3 = false 
  }else if (round.round >= 5) {
    document.getElementById("X__button_recive_click__X").click();
  }


  return (
    <Row>
      <Row>
        <Col>
          <Modal />
          <ModalWinner />
        </Col>
        <Col>
          <Competitors left='6%' top='38%' name='ATLAS' /> 
        </Col>
        <Col></Col>
      </Row>

      <Col>
        <Competitors left='47%' name='ALICE' />
      </Col>

      <Col>
        <Competitors right='6%' top='38%' name='CMS' />
      </Col>

      <CardsOnTable>
        <CardsTable index={cardOne} classControll={class1}/>
        <CardsTable index={cardTwo} classControll={class1}/>
        <CardsTable index={cardTree} classControll={class1}/>
        <CardsTable index={cardFour} classControll={class2}/>
        <CardsTable index={cardFive} classControll={class3}/>
      </CardsOnTable>
    </Row>
  )
}

export default Table
