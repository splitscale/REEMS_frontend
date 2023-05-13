import React, { useEffect, useState } from "react";
import Export from "../Export";
import { Samp } from "../../lib/Samp";
import AddTenantInformation from "./AddTenantInformation";
import SearchPropertyInformation from "../PropertyInformation/SearchPropertyInformation";
import EditTenantInformationButton from "./EditTenantInformation";
import DeleteTenantInformationButton from "./DeleteTenantInformation";

export default function TenantInformationListTable() {
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

  const filteredEnvironmentalHazards = environmentalHazards
    .filter(environmentalHazard =>
      environmentalHazard.username &&
      environmentalHazard.username.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <>
      <div className="container-fluid">
        <div className="mt-5 font-serif text-center fw-bold sm:text-3xl md:text-6xl">
          Tenant Information
        </div>

        <div className="d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="ml-16">
              <AddTenantInformation />
            </div>

            <div className="d-flex flex-grow-1 justify-content-end">
              <div className="mr-4">
                <SearchPropertyInformation onSearch={handleSearch} />
              </div>
              <div className="mr-4">
                <Export />
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
                  Tenant Name
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Property Name
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
                  <td className="border border-green-500 bg-white py-3 px-2 text-center">
                    <div className="d-flex justify-content-center">
                      <EditTenantInformationButton />
                      <DeleteTenantInformationButton id={environmentalHazard.id} onDelete={handleDeleteEnvironmentalHazard} />
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
