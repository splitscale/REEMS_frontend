import React, { useEffect, useState } from "react";
import Export from "../Export";
import { Samp } from "../../lib/Samp";
import AddExpense from "./AddExpense";
import FilterExpenseCategory from "./FilterExpenses";
import SearchExpense from "./SearchExpense";
import EditExpenseButton from "./EditExpense";
import DeleteExpenseButton from "./DeleteExpense";


export default function ExpenseListTable() {
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
        return environmentalHazard.username === "high";
      } else if (filterValue === "medium") {
        return environmentalHazard.username === "medium";
      } else if (filterValue === "low") {
        return environmentalHazard.username === "low";
      }
      return false;
    });


  return (
    <>
      <div className="container-fluid">
        <div className="mt-5 font-serif text-center fw-bold sm:text-3xl md:text-6xl">
          Expense
        </div>

        <div className="d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="ml-16">
              <AddExpense />
            </div>

            <div className="d-flex flex-grow-1 justify-content-end">
              <div className="mr-4">
                <FilterExpenseCategory handleFilter={handleFilter} />
              </div>
              <div className="mr-4">
                <SearchExpense onSearch={handleSearch} />
              </div>
              <div className="mr-4">
                <Export />
              </div>
            </div>
          </div>

          <table className="ml-16 mr-4 flex-grow-1 border-collapse">
            <thead className="text-center bg-gray-700 text-white">
              <tr>
                <th scope="col" className="py-3">
                  #
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Expense Category
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Electricity Rate (kw/hr)
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Expense Amount (Peso)
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Property Name
                </th>
                <th scope="col" className="py-3 border border-gray-800">
                  Tenant's Name
                </th>
                <th scope="col" className="py-3 px-2 border border-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEnvironmentalHazards.map((environmentalHazard) => (
                <tr key={environmentalHazard.id}>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.id}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.name}</td>
                  <td className="border border-green-500 bg-white py-3 px-4">{environmentalHazard.username}</td>
                  <td className="border border-green-500 bg-white py-3 text-center">
                    <div className="d-flex justify-content-center">
                      <EditExpenseButton />
                      <DeleteExpenseButton id={environmentalHazard.id} onDelete={handleDeleteEnvironmentalHazard} />
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
