import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function Home() {
  const [smShow, setSmShow] = useState(false);
  return (
    <div className="home-container" id="home">
      <div className="opacity-bg">
        <div className="title">TAKE YOUR BUSINESS ONLINE WITH US</div>
        <button className="button" onClick={() => setSmShow(true)}>
          Cantact US
        </button>
        <Modal
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="cantact-form"
        >
          <Modal.Header closeButton>
            <Modal.Title id="cantact-form">modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-div">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdnKzHqhV7LvtdCWlAUOabCNJ6K6JGBBpVtMNEPmXZGwIVVTw/viewform"
                frameborder="5"
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
