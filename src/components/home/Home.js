import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FiArrowDownCircle } from "react-icons/fi";

export default function Home() {
  const [smShow, setSmShow] = useState(false);
  return (
    <div className="home-container" id="home">
      <div className="opacity-bg">
        <div className="title">
          TAKE YOUR BUSINESS ONLINE WITH US. WE DEVELOP STYLISH WEB APP /
          FASTEST MOBILE APPS
        </div>
        <button className="button" onClick={() => setSmShow(true)}>
          Contact US
        </button>

        <Modal
          size="lg"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="cantact-form"
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="cantact-form">modal title</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="modal-div">
              <iframe
                className="iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdnKzHqhV7LvtdCWlAUOabCNJ6K6JGBBpVtMNEPmXZGwIVVTw/viewform"
                frameborder="0"
              ></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
