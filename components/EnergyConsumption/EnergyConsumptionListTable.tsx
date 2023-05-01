import { energyConsumptions } from "../../lib/ECSample";
import Filter from "../Filter";
import SearchInput from "../Search";
import AddEnergyConsumption from "./AddEnergyConsumptions";
import DeleteEnergyConsumptionButton from "./DeleteEnergyConsumption";
import EditEnergyConsumptionButton from "./EditEnergyConsumption";

export default function EnergyConsumptionListTable() {
  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Energy Consumption </div><div className="container">

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
              {energyConsumptions.map((energyConsumption) => (
                <tr key={energyConsumption.id}>
                  <td className="border border-black">{energyConsumption.id}</td>
                  <td className="border border-black">{energyConsumption.name}</td>
                  <td className="border border-black">{energyConsumption.description}</td>
                  <td className="border border-black">{energyConsumption.importance}</td>
                  <td className="border border-black text-center">
                    <EditEnergyConsumptionButton />
                    <DeleteEnergyConsumptionButton />
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
