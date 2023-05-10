import React, { useEffect, useState } from "react";
import AddEnvironmentalHazard from "./AddEnvironmentalHazard";
import Filter from "../Filter";
import EditEnvironmentalHazardButton from "./EditEnvironmentalHazard";
import SearchEnvironmentalHazard from "./SearchEnvironmentalHazard";
import Export from "../Export";
import { IEnvironmentalHazard } from "../../lib/IEnvironmentalHazard.";
import DeleteEnvironmentalHazardButton from "./DeleteEnvironmentalHazard";

export default function EnvironmentalHazardListTable() {
  const [environmentalHazards, setEnvironmentalHazards] = useState<IEnvironmentalHazard[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:6060/collections/collectionNiSteven');
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
      environmentalHazard.importance &&
      environmentalHazard.importance.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(environmentalHazard => {
      if (filterValue === "all") {
        return true;
      } else if (filterValue === "high") {
        return environmentalHazard.importance === "high";
      } else if (filterValue === "medium") {
        return environmentalHazard.importance === "medium";
      } else if (filterValue === "low") {
        return environmentalHazard.importance === "low";
      }
      return false;
    });


  return (
    <>
      <div className="container-fluid">
        <div className="ml-72 mt-5 font-serif text-center fw-bold sm:text-2xl md:text-5xl">
          Environmental Hazard
        </div>

        <div className="d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="ml-80">
            <AddEnvironmentalHazard />
            </div>

            <div className="d-flex flex-grow-1 justify-content-end">
            <div className="mr-4">
                <Filter handleFilter={handleFilter} />
              </div>
              <div className="mr-4">
                <SearchEnvironmentalHazard onSearch={handleSearch} />
              </div>
              <div className="mr-4">
                <Export />
              </div>
            </div>
          </div>

          <table className="ml-80 mr-4 flex-grow-1">
            <thead className="text-center bg-gradient-to-b from-green-500 to-green-800 text-white">
              <tr>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  #
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Property Name
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Reporter Name
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Priority
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Mitigation Status
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
                  <td className="border border-black">{environmentalHazard.environmentalHazard}</td>
                  <td className="border border-black">{environmentalHazard.description}</td>
                  <td className="border border-black">{environmentalHazard.importance}</td>
                  <td className="border border-black text-center">
                    <EditEnvironmentalHazardButton />
                    <DeleteEnvironmentalHazardButton id={environmentalHazard.id} onDelete={handleDeleteEnvironmentalHazard} />
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
