import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


function EditContainer({container}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
    <>
    <Button variant="primary" onClick={handleShow}>
      Edit
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
          name="title"
        //   value={container.title}
          onChange={(e) => handleChange(e)}
          className="h-10 w-96 border mt-2 px-2 py-2"
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={saveContainer}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  </>
    )
}

export default EditContainer