import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { apiUrl } from '../../lib/apiconfigs/apiUrl';
import { AuthProps } from '../../lib/auth/AuthProps';
import { Url } from '../../lib/url/Url';
import { UrlRequest } from '../../lib/url/UrlRequest';
import { UrlResponse } from '../../lib/url/UrlResponse';

export const AddLink = ({
  token,
  containerID,
  onSuccess
}: {
  token: string
  containerID: number
  onSuccess: (value: Url) => void;
}) => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState('');

  const handleClose = () => {
    setUrl('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  async function saveLink() {

    const newUrl: UrlRequest = {
      containerID: containerID,
      innerUrl: url
    };

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', token);

    const res = await fetch(apiUrl('/urls'), {
      method: 'post',
      body: JSON.stringify(newUrl),
      headers: headers,
    });

    if (res.ok) {
      const urlResponse = (await res.json()) as UrlResponse;

      console.debug('URL ADDED');

      onSuccess({ id: urlResponse.urlID, link: url});

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
          Add Link
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Container</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal">
            Link
          </label>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={saveLink}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
