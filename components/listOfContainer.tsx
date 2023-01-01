import React from "react";

function listOfContainer() {
  return(

    <div className="container  mx-auto py-4 flex  my-8 shadow border-b bg-orange-300 ">
      <table className = "min-w-full">
        <thead>
          <tr>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wide"> Link </th>
            <th className="text-right"> <button className="bg-blue-500 text-white 
            font-bold py-2 px-4 border-b-4 border-blue-700"> 
            <i className="bi bi-pencil-square">Edit</i>  </button> </th>
            <th className="text-right"> <button className="bg-blue-500 text-white 
            font-bold py-2 px-4 border-b-4 border-blue-700"> 
            <i className="bi bi-trash">Delete</i>  </button> </th>          </tr>
        </thead>

      </table>
    </div>
  )
}

export default listOfContainer