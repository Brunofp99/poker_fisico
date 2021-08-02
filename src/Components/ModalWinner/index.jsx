import React, { useState } from "react";
import {Button, Modal, Row, Col} from 'react-bootstrap'
import Card from '../Card'
import Winner from '../../Controller/Winner'
import cartas from '../../Images'

function ModalRules({ ganhador = ''}) {

  const [show, setShow] = useState(false);

  const showModal = () =>{
    setShow(true);
  }

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

  let response = Winner();
  console.log(response.cartasDaMesa);

  return (
    <>
      <Button id="X__button_recive_click__X" onClick={ showModal } hidden={true}  style={{  'width': '20%', 'height': '100%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c', 'margin-right': 'auto' }}>?</Button>

      <Modal size="lg" show={ show } onHide={newGame}>
        <Modal.Header>
          <Modal.Title>Parabéns { response.winner }</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: '500px'}}>
          <Row>
          <h4 style={{'margin-left': '12px'}}>Mão</h4>
            <Col md={2}>
              <Card image={ response.cardOne.image } />
            </Col>
            <Col md={2}>
              <Card image={ response.cardTwo.image } />
            </Col>
          </Row>
          <h4 style={{'margin-top': '200px', 'margin-left': '12px'}} >Mesa</h4>
          <Row style={{'margin-top': '10px'}}>
            {
              cartas.map((el, i , array) =>{
                if (el.id == response.cartasDaMesa[0] ) {
                  return <Col md={2}><Card image={ el.image } /></Col>
                }
                else if (el.id == response.cartasDaMesa[1] ) {
                return  <Col md={2}><Card image={ el.image } /></Col>
                }
                else if (el.id == response.cartasDaMesa[2] ) {
                  return <Col md={2}><Card image={ el.image } /></Col>
                }
                else if (el.id == response.cartasDaMesa[3] ) {
                  return <Col md={2}><Card image={ el.image } /></Col>
                }
                else if (el.id == response.cartasDaMesa[4] ) {
                  return <Col md={2}><Card image={ el.image } /></Col>
                }
              })
            }
          </Row>
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