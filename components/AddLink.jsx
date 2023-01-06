import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListOfContainer from '../components/listOfContainer';
import axios from 'axios';
import Cookies from 'js-cookie';
import { axiosInstance } from '../lib/apiInteractor/apiInstance';
import { getUidCookie } from '../lib/apiInteractor/cookies/getUidCookie';
import { getAuthCookie } from '../lib/apiInteractor/cookies/getAuthCookie';
import { useRouter } from 'next/router';


function AddLink() {
  const [show, setShow] = useState(false);
  const router = useRouter();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState('');



  const saveContainer = async () => {
    const config = {
      headers: {
        authorization: getAuthCookie(),
      },
      data: {
        uid: getUidCookie(),
        name: name,
      },
    }
    console.log(config)
    try {
      const response = await axiosInstance.post('/containers', config );
      console.log(response.data);
      if(response.data){
        router.push('/');
      }

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
      <div className="flex flex-col justify-center items-center mb-4">
        <Button
          className="fs-5 mt-8 mb-2   w-96 py-1 bg-gradient-to-r
       from-pink-400 to-yellow-500 hover:from-green-500 hover:to-blue-500 ..."
          onClick={handleShow}
        >
          Add Container
        </Button>
      </div>

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
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={saveContainer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ListOfLink />
    </>
  );
}

export default AddLink;
