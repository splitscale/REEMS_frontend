import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddExpense() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    expenseCategory: "",
    electricityRate: "",
    expenseAmount: "",
    propertyName: "",
    tenantName: "",
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
          <Modal.Title>Add Expense Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal"> Expense Category </label>
          <select
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="expenseCategory"
            value={formData.expenseCategory}
            onChange={handleChange}
          >
            <option> </option>
            <option value="electricity">Electricity </option>
            <option value="mitigation">Mitigation</option>

          </select>

          <label className="block text-gray-600 text-sm font-normal"> Electricity Rate (kw/hr)</label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="electricityRate"
            value={formData.electricityRate}
            onChange={handleChange}
          >
          </input>

          <label className="block text-gray-600 text-sm font-normal"> Expense Amount(Peso) </label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="reporterName"
            value={formData.expenseAmount}
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

          <label className="block text-gray-600 text-sm font-normal"> Tenant's Name</label>
          <input type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="tenantName"
            value={formData.tenantName}
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
