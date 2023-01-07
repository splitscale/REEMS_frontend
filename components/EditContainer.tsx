import { title } from 'process';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { UrlContainer } from '../lib/container/UrlContainer';

export default function EditContainer({
  containerId,
  containers,
  onSuccess,
  onFail,
}: {
  containerId: number;
  containers: UrlContainer[];
  onSuccess: (value: UrlContainer[]) => void;
  onFail: (err: Error) => void;
}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');

  const closeModal = () => {
    setShow(false);
    setTitle('');
  };
  const showModal = () => setShow(true);

  function editContainerInDb() {
    if (title === '') {
      onFail(new Error('Invalid container title: ' + title));
      return;
    }

    console.log('edited container: ', title);

    const editedContainer: UrlContainer = {
      id: containerId,
      title: title,
    };

    const filteredContainers = containers.map((c: UrlContainer) => {
      if (c.id === containerId) {
        return editedContainer;
      }

      return c;
    });

    onSuccess(filteredContainers);

    closeModal();
  }

  return (
    <>
      <button className="btn btn-info py-2" onClick={showModal}>
        Edit
      </button>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Container Title</Modal.Title>
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
          <Button variant="cancel" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="info" onClick={editContainerInDb}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
