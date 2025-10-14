import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flex: "2", maxWidth: "600px", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={query}
        onChange={handleInputChange}
        style={{
          padding: "0.5em",
          borderRadius: "4px 0 0 4px",
          border: "1px solid #ccc",
          outline: "none",
          width: "100%",
          
          height: "100%",
          maxHeight: "35px",
          
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5em 1em",
          border: "none",
          borderRadius: "0 4px 4px 0",
          background: "#00ffcc",
          color: "#111",
          cursor: "pointer",
          height: "100%",
          maxHeight: "35px"
        }}
      >
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;