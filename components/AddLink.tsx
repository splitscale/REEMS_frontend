import React, { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Url } from '../lib/url/Url';

export function AddLink({ onSubmit }: { onSubmit: (link: Url) => void }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');

  // const url = 'http://jsonplaceholder.typicode.com/posts';

  const saveLink = async (event: FormEvent) => {
    event.preventDefault();

    const link: any = {
      name: name,
    };

    try {
      // const res = await axios.post(url, link);
      // onSubmit(link);
      console.log('res.data');
    } catch (err: any) {
      console.error(err.message);
    }
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="info" onClick={saveLink}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
