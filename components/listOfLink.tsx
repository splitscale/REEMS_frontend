import React from "react";

function ListOfLink() {
  return(
    <div className="container mx-auto my-8 flex shadow border-b">
      <table className = "min-w-full">
        <thead className = "bg-gray-50">
          <tr>
            <th className="text-left font-medium text-gray-500 uppercase tracking-wide"> Link </th>
            <th className="text-right"> <i className="bi bi-pencil-square"> Edit </i> </th>
            <th className="text-right"> <i className="bi bi-trash"> Delete</i></th>
            <th className="text-right"> <i className="bi bi-menu-button"></i> Show </th>
          </tr>
        </thead>
          
        <tbody className="bg-white">
          <tr>
            <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">
                Username
              </div>
            </td>
                          
            <td className="text-left px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">
                Password
              </div>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default ListOfLink