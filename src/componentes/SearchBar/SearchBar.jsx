import React, { useState } from "react";

function SearchBar({ buscar, setBuscar }) {
  // const [query, setQuery] = useState("");

  // const handleInputChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (onSearch) {
  //     onSearch(query);
  //   }
  // };

  return (
    <div  style={{ display: "flex", flex: "2", maxWidth: "600px", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setBuscar(e.target.value)}
        style={{
          padding: "0.5em",
          borderRadius: "4px 0 0 4px",
          border: "none",
          outline: "none",
          width: "100%",
          
          height: "100%",
          
          
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5em 1em",
          border: "none",
          borderRadius: "0 4px 4px 0",
          background: "#ffbb33",
          color: "#111",
          height: "100%",
          cursor: "pointer",
          
          
        }}
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;