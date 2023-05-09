import { useState } from "react";

export default function DeleteEnvironmentalHazardButton(props: { id: number, onDelete: Function }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:6060/collections/collectionNiSteven${props.id}`, {
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