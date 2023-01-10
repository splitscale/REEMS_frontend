import { title } from 'process';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { editContainerHandler } from '../../lib/container/edit/editContainer';
import { UrlContainer } from '../../lib/container/UrlContainer';
import { UrlContainerBuilder } from '../../lib/container/UrlContainerBuilder';

export default function EditContainer({
  container,
  containers,
  onSuccess,
  onFail,
}: {
  readonly container: UrlContainer;
  readonly containers: UrlContainer[];
  readonly onSuccess: (value: UrlContainer[]) => void;
  readonly onFail: (err: Error) => void;
}) {
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState(container.title);

  const closeModal = () => {
    setShow(false);
    setNewTitle('');
  };
  const showModal = () => setShow(true);

  async function editContainerInDb() {
    if (newTitle === '') {
      onFail(new Error('Invalid container title: ' + title));
      return;
    }

    console.log('edited container: ', title);

    const mappedContainers: UrlContainer[] = containers.map(
      (currentContainer: UrlContainer) => {
        if (currentContainer.id === container.id) {
          return UrlContainerBuilder(container.id, newTitle);
        }

        return currentContainer;
      }
    );

    const isSuccess = await editContainerHandler(container.id, newTitle);

    if (isSuccess) {
      onSuccess(mappedContainers);
      closeModal();
    } else {
      onFail(new Error('something went wrong, try again later'));
    }
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
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
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
