import { useState } from "react";

export default function DeletePropertyInformationButton(props: { id: number, onDelete: Function }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        props.onDelete(props.id);
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      className="bi bi-trash text-md "
      onClick={handleDelete}
      disabled={loading}
    />
  );
}