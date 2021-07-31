import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap'
import Card from '../Card'

function ModalRules({show = false, ganhador = ''}) {

  let cardHandOne = '', cardHandTwo = ''

  const newGame = () =>{
    localStorage.removeItem('cardsTable')
    localStorage.removeItem('cards')
    localStorage.removeItem('cardsCompetitorsALICE')
    localStorage.removeItem('cardsCompetitorsATLAS')
    localStorage.removeItem('cardsCompetitorsCMS')
    window.location.reload(true)
  }

  const endGame = () =>{
    window.close()
  }
  //se o ganhador for o lhcb
  if(ganhador === 'LHCb'){}
  //se o ganhador for o Atlas
  else if(ganhador === 'Atlas'){}
  //se o ganhador for o Alice
  else if(ganhador === 'Alice'){}
  //se o ganhador for o Cms
  else if(ganhador === 'CMS'){}

  return (
    <>
      <Modal size="lg" show={ show } onHide={newGame}>
        <Modal.Header closeButton>
          <Modal.Title>Parabéns { ganhador }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card image={ cardHandOne } />
          <Card image={ cardHandTwo } />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={ newGame }>
            Jogar de novo!
          </Button>
          <Button variant="danger" onClick={ endGame }>
            sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRules