import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListOfContainer from "../components/listOfContainer";
import axios from 'axios';
import Cookies from 'js-cookie';


function AddContainer() {
  const URL = "http://34.143.216.186:28762/api/containers"
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
    try {
      console.log(Cookies.get("authorization"));
      const response = await axios.post(URL, {
        headers: {
          'authorization': Cookies.get("authorization"),
        },
        data: container,
      });
      setResponseContainer(response.data);
      console.log(response.data)
    } catch (err) {
      if (err.response) {
        // The client was given an error response (5xx, 4xx)
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The client never received a response, and the request was never left
        console.log(err.request);
      } else {
        // Anything else
        console.log('Error', err.message);
      }
    }
  };


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
            name="title"
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
