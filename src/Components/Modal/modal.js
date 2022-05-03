import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

export default function Example({ openModal }) {
  const [show] = useState(true);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={openModal}>
        <Modal.Header closeButton>
          <Modal.Title>Внимание</Modal.Title>
        </Modal.Header>
        <Modal.Body>Данный номер уже существует</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={openModal}>
            ок
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
