import React from "react";

function ContainerList({container }) {
  return (
    <tr key={container.id}>
    <th className="text-left font-medium text-gray-500 uppercase tracking-wide"> {container.title} </th>
    <th className="text-right"> <button className="bg-blue-500 text-white 
    font-bold py-2 px-4 border-b-4 border-blue-700"> 
    <i className="bi bi-pencil-square">Edit</i>  </button> </th>
    <th className="text-right"> <button className="bg-blue-500 text-white 
    font-bold py-2 px-4 border-b-4 border-blue-700"> 
    <i className="bi bi-trash">Delete</i>  </button> </th>   </tr>
  )
}

export default ContainerList
