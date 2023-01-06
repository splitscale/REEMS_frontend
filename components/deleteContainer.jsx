import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function DeleteContainer({container}) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this container?')) {
      axios.delete(`/api/containers/${container.id}`)
        .then(response => {
          setSuccess(response.data.message)
        })
        .catch(error => {
          setError(error.response.data.message)
        })
    }
  }
}

