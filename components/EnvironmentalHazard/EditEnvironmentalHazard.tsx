import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function EditEnvironmentalHazardButton() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:6060/collections/collectionNiSteven', {
      method: 'PUT',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const json = await response.json();
    console.log(json);

    handleClose();
  }

  return (
    <>
      <button
        className="bi bi-pencil-square"
        onClick={() => setShowModal(true)}
      />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Update Environmental Hazard</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal"> Environmental Hazard </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="username"
            value={formData.username}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Description </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="email"
            value={formData.email}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Importance </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
          >
          </input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" className="w-100" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}
