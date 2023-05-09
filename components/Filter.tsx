import React from "react";

type FilterProps = {
  handleFilter: (value: string) => void;
}
export default function Filter({ handleFilter }: FilterProps) {
  
  const handleFilterChange = (event: any) => {
    handleFilter(event.target.value);
  };

  return (
    <div className="bi bi-funnel mb-2">
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}
