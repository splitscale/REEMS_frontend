import React, { useEffect, useState } from "react";
import AddEnvironmentalHazard from "./AddEnvironmentalHazard";
import Filter from "../Filter";
import EditEnvironmentalHazardButton from "./EditEnvironmentalHazard";
import DeleteEnvironmentalHazardButton from "./DeleteEnvironmentalHazard";
import { Samp } from "../../lib/Samp";
import SearchEnvironmentalHazard from "./SearchEnvironmentalHazard";

export default function EnvironmentalHazardListTable() {
  const [environmentalHazards, setEnvironmentalHazards] = useState<Samp[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setEnvironmentalHazards(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleDeleteEnvironmentalHazard = (id: number) => {
    setEnvironmentalHazards(prevEnvironmentalHazards =>
      prevEnvironmentalHazards.filter(environmentalHazard => environmentalHazard.id !== id));
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredEnvironmentalHazards = environmentalHazards.filter(environmentalHazard =>
    environmentalHazard.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Environmental Hazard </div>

      <div className="d-flex flex-column w-100 mx-2">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <div className="ml-8">
            <AddEnvironmentalHazard />
          </div>
          <div className="d-flex flex-grow-1 justify-content-end">
            <Filter />
            <div className="ml-4 mr-8">
              <SearchEnvironmentalHazard onSearch={handleSearch} />
            </div>
          </div>
        </div>

        <table className="mx-8 flex-grow-1">
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
            {filteredEnvironmentalHazards.map((environmentalHazard) => (
              <tr key={environmentalHazard.id}>
                <td className="border border-black">{environmentalHazard.id}</td>
                <td className="border border-black">{environmentalHazard.username}</td>
                <td className="border border-black">{environmentalHazard.email}</td>
                <td className="border border-black">{environmentalHazard.name}</td>
                <td className="border border-black text-center">
                  <EditEnvironmentalHazardButton />
                  <DeleteEnvironmentalHazardButton id={environmentalHazard.id} onDelete={handleDeleteEnvironmentalHazard} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
