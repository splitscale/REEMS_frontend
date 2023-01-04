import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListOfContainer from "../components/listOfContainer";


function AddContainer() {
  const CONTAINER_API_BASE_URL = "http://34.143.216.186:28762/api/containers"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [container, setContainer] = useState({
    title: "",
  });

  const [responseContainer, setResponseContainer] = useState({
    title: "",
  }
  )

  const handleChange = (event) => {
    const value = event.target.value;
    setContainer({ ...container, [event.target.name]: value });
  };

  const saveContainer = async () => {
    const response = await fetch(CONTAINER_API_BASE_URL,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(container)
    });
    if(!response.ok) {
      throw new Error("can't add container");
    }
    const _container = await  response.json()
    setResponseContainer(_container);
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveContainer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ListOfContainer container={responseContainer}/>
    </>
  );
}
 
export default AddContainer;
