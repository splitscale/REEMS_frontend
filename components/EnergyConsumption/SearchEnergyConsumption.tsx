import React, { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchEnergyConsumption({ onSearch }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search"
          className="form-control border border-solid rounded-lg text-center"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-light border border-solid">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
}