export default function Expense() {
  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold">
        Expenses
      </div>

      <div>
        <table className="mt-12 mx-auto">
          <thead className="text-center bg-gradient-to-b from-red-500 to-red-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                ID
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-900">
                Environment
              </th>

              <th scope="col" className="px-6 py-3 border border-gray-900">
                Expenses
              </th>

              <th scope="col" className="px-6 py-3 border border-gray-900">
                Description
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border border-black">01</td>
              <td className="border border-black">Earthquake</td>
              <td className="border border-black"> 1000 </td>
              <td className="border border-black"> A sudden shaking of the ground caused by the passage of seismic waves through Earth’s rocks.</td>
            </tr>
            <tr>
              <td className="border border-black">02</td>
              <td className="border border-black">Tsunami</td>
              <td className="border border-black"> 1000 </td>
              <td className="border border-black"> A series of ocean waves that sends surges of water, sometimes reaching heights of over 100 feet (30.5 meters), onto land.</td>
            </tr>
            <tr>
              <td className="border border-black ">03</td>
              <td className="border border-black">Typhoon</td>
              <td className="border border-black"> 1000 </td>
              <td className="border border-black"> A mature tropical cyclone that develops between 180° and 100°E in the Northern Hemisphere.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
