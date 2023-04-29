import NavBar from "../components/Navbar";

export default function Expense() {
  return (
    <>
      <NavBar/>
      <div className="mt-12 font-serif text-center text-5xl fw-bold">
        Tenant Information
      </div>
      <div>
        <table className="mt-48 mx-auto">
          <thead className="text-center bg-gradient-to-b from-blue-500 to-blue-800 text-white">
            <tr>
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
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-black">Jerome</td>
              <td className="border border-black">AA</td>
              <td className="border border-black"> A sudden shaking of the ground caused by the passage of seismic waves through Earth’s rocks.</td>
              <td className="border border-black"> 1000 </td>
            </tr>
            <tr>
              <td className="border border-black">Jiv</td>
              <td className="border border-black">BB</td>
              <td className="border border-black"> A series of ocean waves that sends surges of water, sometimes reaching heights of over 100 feet (30.5 meters), onto land.</td>
              <td className="border border-black"> 1000 </td>
            </tr>
            <tr>
              <td className="border border-black ">Candace</td>
              <td className="border border-black">CC</td>
              <td className="border border-black"> A mature tropical cyclone that develops between 180° and 100°E in the Northern Hemisphere.</td>
              <td className="border border-black"> 1000 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
