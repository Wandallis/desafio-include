import React from "react";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.6)", // 🔹 listra sombreada no topo
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "1em",
          backgroundColor: "#0f1116",
          color: "#fff",
        }}
      >
        <p>&copy; 2025 site de avaliações. Todos os direitos reservados.</p>

        <div style={{ display: "flex", gap: "1em" }}>
          <a
            href="/sobre"
            style={{
              color: "#00ffcc",
              marginRight: "10px",
              textDecoration: "none",
            }}
          >
            Sobre nós
          </a>
          <a
            href="/contato"
            style={{
              color: "#00ffcc",
              textDecoration: "none",
            }}
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
