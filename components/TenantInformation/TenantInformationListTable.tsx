import React from "react";
import SearchInput from "../Search";
import Filter from "../Filter";
import { tenantsInformation } from "../../lib/TISample";
import AddTenantInformation from "./AddTenantInformation";
import EditTenantInformationButton from "./EditTenantInformation";
import DeleteTenantInformationButton from "./DeleteTenantInformation";

export default function TenantInformationListTable() {

  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Environmental Hazard </div>

      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <AddTenantInformation />
        <Filter />
        <SearchInput />
      </div>

      <div className="container">
        <table className="mx-auto">
          <thead className="text-center bg-gradient-to-b from-blue-600 to-blue-900 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                TI_ID
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Company
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Description
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Expenses
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
            {tenantsInformation.map((tenantInformation) => (
              <tr key={tenantInformation.id}>
                <td className="border border-black">{tenantInformation.id}</td>
                <td className="border border-black">{tenantInformation.name}</td>
                <td className="border border-black">{tenantInformation.company}</td>
                <td className="border border-black">{tenantInformation.description}</td>
                <td className="border border-black">{tenantInformation.expenses}</td>
                <td className="border border-black">{tenantInformation.importance}</td>
                <td className="border border-black text-center">
                  <EditTenantInformationButton />
                  <DeleteTenantInformationButton/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
