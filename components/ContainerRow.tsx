import React from "react";
import { Container } from "../lib/container/Container";
// import EditContainer from "../components/EditContainer";


export function ContainerRow({container, deleteContainer}:{container: Container, deleteContainer: Function}) {
  return (
    <tr key={container.containerID}>
    <th className="text-left font-medium text-gray-500 uppercase tracking-wide"> {container.name} </th>
    {/* <th className="text-right"> <button className="bg-blue-500 text-white 
    font-bold py-2 px-4 border-b-4 border-blue-700" onClick={(e, id) => editContainer(e, container.containerId)}> 
    <i className="bi bi-pencil-square">Edit</i>  </button> </th> */}
    <th className="text-right"> <button className="bg-blue-500 text-white 
    font-bold py-2 px-4 border-b-4 border-blue-700" onClick={(e) => deleteContainer(e, container.containerID)}> 
    <i className="bi bi-trash">Delete</i>  </button> </th>   </tr>
  )
}

