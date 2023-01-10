import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { editUrlHandler } from "../../lib/url/edit/editUrl";
import { Url } from "../../lib/url/Url";
import { UrlBuilder } from "../../lib/url/UrlBuilder";


export default function EditLink({
  url,
  urls,
  onSuccess,
  onFail,
}: {
  readonly url: Url;
  readonly urls: Url[];
  readonly onSuccess: (value: Url[]) => void;
  readonly onFail: (err: Error) => void;
}) {
  const [show, setShow] = useState(false);
  const [newLink, setNewLink] = useState(url.link);

  const closeModal = () => {
    setShow(false);
    setNewLink('');
  };
  const showModal = () => setShow(true);

  async function editContainerInDb() {
    if (newLink === '') {
      onFail(new Error('Invalid link: ' + url));
      return;
    }
    const mappedUrls: Url[] = urls.map(
      (currentUrl: Url) => {
        if (currentUrl.id === url.id) {
          return UrlBuilder(url.id, newLink);
        }

        return currentUrl;
      }
    );

    const isSuccess = await editUrlHandler(0, newLink, url.id );

    if (isSuccess) {
      onSuccess(mappedUrls);
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
          <Modal.Title>Edit Link</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal">
            Link
          </label>

          <input
            type="text"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
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