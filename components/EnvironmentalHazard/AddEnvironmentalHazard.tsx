import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddEnvironmentalHazard() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    environmentalHazard: "",
    description: "",
    importance: "",
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (event: { target: { name: string; value: string; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:6060/collections/collectionNiSteven/environmentalHazard', {
      method: 'POST',
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
    <div>
      <div className="items-center mb-2">
        <Button
          className="bi bi-plus fs-6 mt-8 w-40 bg-gradient-to-r
                    from-green-500 to-green-800 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => setShowModal(true)}
        >
          Add Details
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Environmental Hazard Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal"> Environmental Hazard </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="environmentalHazard"
            value={formData.environmentalHazard}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Description </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="description"
            value={formData.description}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Importance</label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="importance"
            value={formData.importance}
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
    </div>
  );
};
