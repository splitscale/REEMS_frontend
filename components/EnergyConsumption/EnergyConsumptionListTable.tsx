import { useState, useEffect } from "react";
import Filter from "../Filter";
import SearchInput from "../Search";
import AddEnergyConsumption from "./AddEnergyConsumptions";
import DeleteEnergyConsumptionButton from "./DeleteEnergyConsumption";
import EditEnergyConsumptionButton from "./EditEnergyConsumption";
import { IEnergyConsumption } from "../../lib/IEnergyConsumption";

export default function EnergyConsumptionListTable() {
  const [energyConsumptions, setEnergyConsumptions] = useState<IEnergyConsumption[]>([]);

  useEffect(() => {
    async function fetchEnergyConsumptions() {
      try {
        const response = await fetch('https://splitscale.systems:5050/api/energy/consumption/read/{id}');
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
      <div className="container-fluid">
        <div className="d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="ml-8">
              <AddEnergyConsumption />
            </div>
            <div className="d-flex flex-grow-1 justify-content-end">
              {/* <Filter /> */}
              <div className="ml-4 mr-8">
                <SearchInput />
              </div>
            </div>
          </div>

          <table className="mx-8 flex-grow-1">
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
              {energyConsumptions.map((energyConsumption: IEnergyConsumption) => (
                <tr key={energyConsumption.id}>
                  <td className="border border-black text-lg">{energyConsumption.id}</td>
                  <td className="border border-black text-lg">{energyConsumption.energyConsumption}</td>
                  <td className="border border-black text-lg">{energyConsumption.description}</td>
                  <td className="border border-black text-lg">{energyConsumption.importance}</td>
                  <td className="border border-black text-center">
                    <EditEnergyConsumptionButton />
                    <DeleteEnergyConsumptionButton id={energyConsumption.id} onDelete={handleDeleteEnergyConsumption} />
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
