import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddTenantInformation() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    tenantName: "",
    propertyName: ""
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
          <Modal.Title>Property Information Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal"> Tenant Name </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="propertyName"
            value={formData.tenantName}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Property Name </label>
          <select
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="status"
            value={formData.propertyName}
            onChange={handleChange}
          >
            <option> </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="underMaintenance">Under Maintenance</option>
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
