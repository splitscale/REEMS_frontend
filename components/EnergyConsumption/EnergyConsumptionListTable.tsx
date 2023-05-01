import { useState, useEffect } from "react";
import Filter from "../Filter";
import SearchInput from "../Search";
import AddEnergyConsumption from "./AddEnergyConsumptions";
import DeleteEnergyConsumptionButton from "./DeleteEnergyConsumption";
import EditEnergyConsumptionButton from "./EditEnergyConsumption";

export default function EnergyConsumptionListTable() {
  const [energyConsumptions, setEnergyConsumptions] = useState<User[]>([]);

  useEffect(() => {
    async function fetchEnergyConsumptions() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setEnergyConsumptions(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchEnergyConsumptions();
  }, []);

  const handleDeleteEnergyConsumption = (id: number) => {
    setEnergyConsumptions(prevEnergyConsumptions =>
      prevEnergyConsumptions.filter(energyConsumption => energyConsumption.id !== id));
  }

  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Environmental Hazard </div>

      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <AddEnergyConsumption />
        <Filter />
        <SearchInput />
      </div>

      <div className="container">
        <table className="mx-auto">
          <thead className="text-center bg-gradient-to-b from-yellow-500 to-yellow-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Energy Consumption
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
            {energyConsumptions.map((energyConsumption: User) => (
              <tr key={energyConsumption.id}>
                <td className="border border-black text-lg">{energyConsumption.id}</td>
                <td className="border border-black text-lg">{energyConsumption.username}</td>
                <td className="border border-black text-lg">{energyConsumption.email}</td>
                <td className="border border-black text-lg">{energyConsumption.name}</td>
                <td className="border border-black text-center">
                  <EditEnergyConsumptionButton />
                  <DeleteEnergyConsumptionButton id={energyConsumption.id} onDelete={handleDeleteEnergyConsumption} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
