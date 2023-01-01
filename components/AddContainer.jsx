import e from "cors";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddContainer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [container, setContainer] = useState({
    title: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setContainer({ ...container, [event.target.name]: value });
  };

  const saveUser = async () => {
    const response = await fetch();
  }

  const reset = async () => {
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Container
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Container</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal">
            Container Title
          </label>
          <input
            type="text"
            name="firstName"
            value={container.title}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={saveUser}>
            Close
          </Button>
          <Button variant="primary" onClick={reset}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContainer;
