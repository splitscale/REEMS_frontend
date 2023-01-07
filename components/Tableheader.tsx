export default function TableHeader({ title }: { title: string }) {
  return (
    <thead className="bg-gradient-to-b from-yellow-500 to-orange-500 text-white">
      <tr>
        <th scope="col" className="px-6 py-3">
          title
        </th>
        <th scope="col" className="px-6 py-3">
          <i className="bi bi-pencil-square"> Edit </i>
        </th>
        <th scope="col" className="px-6 py-3">
          <i className="bi bi-trash"> Delete </i>
        </th>
      </tr>
    </thead>
  );
}
