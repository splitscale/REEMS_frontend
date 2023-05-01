export default function FilterInput() {

  return (
    <div className='bi bi-filter mb-2'>
      <select>
        <option value="high">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
