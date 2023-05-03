import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function AddExpense() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const saveContainer = () => {
    // handle save container logic here
  };

  return (
    <div>
      <div className="items-center mb-2">
        <Button
          className="bi bi-plus fs-6 mt-8 w-40 bg-gradient-to-r
                    from-red-500 to-red-900 hover:from-pink-500 hover:to-yellow-500"
          onClick={() => setShowModal(true)}
        >
          Add Details
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Energy Expense Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label className="block text-gray-600 text-sm font-normal"> Energy Consumption </label>
          <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>

          <label className="block text-gray-600 text-sm font-normal"> Description </label>
          <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>

          <label className="block text-gray-600 text-sm font-normal"> Importance (High, Medium, Low) </label>
          <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={saveContainer}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
