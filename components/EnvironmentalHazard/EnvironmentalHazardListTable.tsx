import React, { useEffect, useState } from "react";
import AddEnvironmentalHazard from "./AddEnvironmentalHazard";
import EditEnvironmentalHazardButton from "./EditEnvironmentalHazard";
import SearchEnvironmentalHazard from "./SearchEnvironmentalHazard";
import DeleteEnvironmentalHazardButton from "./DeleteEnvironmentalHazard";
import { Samp } from "../../lib/Samp";
import FilterEnvironmentalHazardCategory from "./FilterEnvironmentalHazardCategory";
import ExportEnvironmentalHazard from "./ExportEnvironmentalHazard";

export default function EnvironmentalHazardListTable() {
  const [environmentalHazards, setEnvironmentalHazards] = useState<Samp[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");

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

  const handleFilter = (value: string): void => {
    setFilterValue(value);
  }

  const filteredEnvironmentalHazards = environmentalHazards
    .filter(environmentalHazard =>
      environmentalHazard.username &&
      environmentalHazard.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(environmentalHazard => {
      if (filterValue === "all") {
        return true;
      } else if (filterValue === "high") {
        return environmentalHazard.username === "Kamren";
      } else if (filterValue === "medium") {
        return environmentalHazard.username === "Bret";
      } else if (filterValue === "low") {
        return environmentalHazard.username === "Samantha";
      }
      return false;
    });


  return (
    <>
      <div className="container-fluid">
        <div className="mt-5 font-serif text-center fw-bold sm:text-3xl md:text-6xl">
          Environmental Hazard
        </div>

        <div className="d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="ml-16">
              <AddEnvironmentalHazard />
            </div>

            <div className="d-flex flex-grow-1 justify-content-end">
              <div className="mr-4">
                <FilterEnvironmentalHazardCategory handleFilter={handleFilter} />
              </div>
              <div className="mr-4">
                <SearchEnvironmentalHazard onSearch={handleSearch} />
              </div>
              <div className="mr-4">
                <ExportEnvironmentalHazard />
              </div>
            </div>
          </div>

          <table className="ml-16 mr-4 flex-grow-1 border-collapse">
            <thead className="text-center bg-gray-700 text-white">
              <tr>
                <th scope="col" className="py-3 ">
                  #
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Title
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Category
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Description
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Property Name
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Risk Level
                </th>
                <th scope="col" className="py-3  border border-gray-800">
                  Mitigation Status
                </th>
                <th scope="col" className="py-3 px-2 border border-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEnvironmentalHazards.map((environmentalHazard) => (
                <tr key={environmentalHazard.id}>
                  <td className="border border-green-500 bg-white py-3 px-4 text-center">{environmentalHazard.id}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.email}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.name}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.name}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 px-2 text-center">
                    <div className="d-flex justify-content-center">
                      <EditEnvironmentalHazardButton />
                      <DeleteEnvironmentalHazardButton id={environmentalHazard.id} onDelete={handleDeleteEnvironmentalHazard} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
