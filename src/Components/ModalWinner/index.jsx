import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap'
import Card from '../Card'
import Winner from '../../Controller/Winner'

function ModalRules({ ganhador = ''}) {

  const [show, setShow] = useState(false);

  const showModal = () =>{
    setShow(true);
  }

  let cardHandOne = '', cardHandTwo = ''

  const newGame = () =>{
    localStorage.removeItem('cardsTable')
    localStorage.removeItem('cards')
    localStorage.removeItem('cardsCompetitorsALICE')
    localStorage.removeItem('cardsCompetitorsATLAS')
    localStorage.removeItem('cardsCompetitorsCMS')
    setShow(false);
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

  let response = Winner();

  return (
    <>
      <Button id="X__button_recive_click__X" onClick={showModal} hidden={true} style={{  'width': '20%', 'height': '100%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c', 'margin-right': 'auto' }}>?</Button>

      <Modal size="lg" show={ show } onHide={newGame}>
        <Modal.Header>
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