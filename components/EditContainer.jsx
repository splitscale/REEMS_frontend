import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { any } from "react-native/Libraries/Text/TextNativeComponent";


function EditContainer({container}) {
    const [show, setShow] = useState(false);
    const router = useRouter();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    
    const config = {
      method: 'PUT',
      headers: {
        authorization: getAuthCookie(),
      },
      data: {
        uid: getUidCookie(),
        name: name,
      },
    }

    console.log(config)

    const editContainer = async (event) => {

      event.preventDefault();

      await fetch(`/containers/${container.Id}`, config)
      .then(() => {
        alert("Edit Success")
        router.push('/');
        handleClose();
      })
      .catch(error => {
        console.log('Error', error.message);
        alert("Edit Failed");
      })
  }
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
          value={name}
          onChange={(e) => setName(e)}
          className="h-10 w-96 border mt-2 px-2 py-2"
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
         <Button variant="primary" onClick={editContainer}>
          Save Changes
        </Button> 
      </Modal.Footer>
    </Modal>
  </>
    )
}

export default EditContainer