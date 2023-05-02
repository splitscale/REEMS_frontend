import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddEnergyConsumption() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    energyConsumption: "",
    description: "",
    importance: "",
  });

  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch('https://splitscale.systems:5050/api/energyconsumption/add', {
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
                    from-yellow-400 to-yellow-800 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => setShowModal(true)}>
          Add Details
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Energy Consumption Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal"> Energy Consumption </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="energyConsumption"
            value={formData.energyConsumption}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Description </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2 "
            name="description"
            value={formData.description}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Importance (High, Medium, Low) </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="importance"
            value={formData.importance}
            onChange={handleChange}
          >
          </input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
