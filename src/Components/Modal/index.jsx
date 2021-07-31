import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap'
import ImageRules from '../../Images/rules.png'

function ModalRules() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{  'width': '20%', 'height': '100%', 'background-color': '#af2e2e', 'border': '1px solid #7e1c1c', 'margin-right': 'auto' }}>?</Button>

      <Modal size="lg" show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>Regras das Cartas</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={ImageRules} alt="Combinações possíveis" /></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalRules