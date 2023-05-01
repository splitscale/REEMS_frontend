import React from "react";
import { environmentalHazards } from "../../lib/EHSample";
import AddEnvironmentalHazard from "./AddEnvironmentalHazard";
import SearchInput from "../Search";
import Filter from "../Filter";
import EditEnvironmentalHazardButton from "./EditEnvironmentalHazard";
import DeleteEnvironmentalHazardButton from "./DeleteEnvironmentalHazard";

export default function EnvironmentalHazardListTable() {

  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Environmental Hazard </div>

      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <AddEnvironmentalHazard />
        <Filter />
        <SearchInput />
      </div>

      <div className="container">
        <table className="mx-auto">
          <thead className="text-center bg-gradient-to-b from-green-500 to-green-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Environmental Hazards
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Description
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Importance
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {environmentalHazards.map((environmentalHazard) => (
              <tr key={environmentalHazard.id}>
                <td className="border border-black">{environmentalHazard.id}</td>
                <td className="border border-black">{environmentalHazard.hazard}</td>
                <td className="border border-black">{environmentalHazard.description}</td>
                <td className="border border-black">{environmentalHazard.importance}</td>
                <td className="border border-black text-center">
                  <EditEnvironmentalHazardButton />
                  <DeleteEnvironmentalHazardButton/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
