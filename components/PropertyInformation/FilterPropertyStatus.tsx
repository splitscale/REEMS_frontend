import React from "react";

type FilterProps = {
  handleFilter: (value: string) => void;
}
export default function FilterPropertyName({ handleFilter }: FilterProps) {
  
  const handleFilterChange = (event: any) => {
    handleFilter(event.target.value);
  };

  return (
    <div className="bi bi-funnel mb-2">
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="underMaintenance">Under Maintenance</option>
      </select>
    </div>
  );
}
