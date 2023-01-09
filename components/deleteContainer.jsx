async function DeleteContainer(container){
    if (window.confirm('Are you sure you want to delete this container?')) {
      await fetch ( `/containers/${container.Id}`,{method: 'DELETE'})
      .then(response => {
        setSuccess(response.data.message)
      })
      .catch(error => {
        setError(error.response.data.message)
      })
    }
  }

  export default DeleteContainer;





