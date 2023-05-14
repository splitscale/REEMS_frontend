import React, { useEffect, useState } from "react";
import { Samp } from "../lib/Samp";

export default function DashboardListTable() {
  const [environmentalHazards, setEnvironmentalHazards] = useState<Samp[]>([]);

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

  return (
    <>
      <table className="flex-grow-1 w-full">
        <thead className="text-center">
          <tr>
            <th scope="col" className="py-3 bg-white">
              Environmental Hazard
            </th>
            <th scope="col" className="py-3 bg-white">
              Risk Level
            </th>
            <th scope="col" className="py-3 bg-white">
              Mitigation Status
            </th>
          </tr>
        </thead>
        <tbody>
          {environmentalHazards.slice(0, 5).map((environmentalHazard) => (
            <tr key={environmentalHazard.id}>
              <td className="bg-white py-3 px-4 text-center">{environmentalHazard.id}. {environmentalHazard.name}</td>
              <td className="bg-white py-3 px-4 text-center">{environmentalHazard.username}</td>
              <td className="bg-white py-3 px-4 text-center">{environmentalHazard.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
