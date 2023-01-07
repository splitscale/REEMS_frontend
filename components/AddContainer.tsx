import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { apiUrl } from '../lib/apiconfigs/apiUrl';
import { UrlContainer } from '../lib/container/UrlContainer';
import { UrlContainerRequest } from '../lib/container/UrlContainerRequest';
import { UrlContainerResponse } from '../lib/container/UrlContainerResponse';
import { getAuthToken } from '../lib/localstorage/getAuthToken';
import { getUid } from '../lib/localstorage/getUid';

export function AddContainer({
  onSuccess,
  onFail,
}: {
  onSuccess: (value: UrlContainer) => void;
  onFail: (err: Error) => void;
}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');

  const handleClose = () => {
    setTitle('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  async function saveContainer() {
    console.debug('[NEW CONTAINER]: ' + title);
    if (title === '') {
      const err = new Error('Empty Container title');

      alert(err);
      onFail(err);
      return;
    }

    // CHECK FOR CREDENTIALS
    const uid = getUid();
    const authToken = getAuthToken();

    if (uid === null || authToken === null) {
      alert('Please login');
      return;
    }

    console.debug(uid);
    console.debug(authToken);

    // SEND THIS TO DB
    const newContainer: UrlContainerRequest = {
      uid: uid,
      name: title,
    };

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', authToken);

    const res = await fetch(apiUrl('/containers'), {
      method: 'post',
      body: JSON.stringify(newContainer),
      headers: headers,
    });

    if (res.ok) {
      const container = (await res.json()) as UrlContainerResponse;

      console.debug('CONTAINER ADDED');

      onSuccess({ id: container.containerID, title: title });

      handleClose();
    } else {
      console.debug('FAILED');
      console.debug(res);
      alert('Some error occurred, Unable to save: ' + res.statusText);
    }
  }

  return (
    <div>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="cancel" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={saveContainer}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
