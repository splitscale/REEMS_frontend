import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddEnvironmentalHazard() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    propertyName: "",
    reporterName: "",
    priority: "",
    mitigationStatus: ""
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
          className="bi bi-plus fs-6 mt-8 w-40 text-black bg-transparent border border-black"
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
          <label className="block text-gray-600 text-sm font-normal"> Title </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="title"
            value={formData.title}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Category </label>
          <select
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option> </option>
            <option value="biological">Biological</option>
            <option value="chemical">Chemical</option>
            <option value="physical">Physical</option>
          </select>

          <label className="block text-gray-600 text-sm font-normal">Description</label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="description"
            value={formData.description}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal">Property Name</label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Reporter Name </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="reporterName"
            value={formData.reporterName}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Risk Level </label>
          <select
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option> </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>

          <label className="block text-gray-600 text-sm font-normal"> Mitigation Status</label>
          <select
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="mitigationStatus"
            value={formData.mitigationStatus}
            onChange={handleChange}
          >
            <option> </option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>

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
