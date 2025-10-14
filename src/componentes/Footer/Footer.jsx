import React from "react";

function Footer() {
  return (
    <footer style={{display: "flex",width: "100%"}}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", padding: "1em", backgroundColor: "#111", color: "#fff" }}>
            <p>&copy; 2025 site de avaliações. Todos os direitos reservados.</p>
            <div style={{display: "flex", gap: "1em"}}>
                <a href="/sobre" style={{ color: "#00ffcc", marginRight: "10px", textDecoration: "none" }}>sobre nós</a>
                <a href="/contato" style={{ color: "#00ffcc", textDecoration: "none" }}>Contato</a>
            </div>
        </div>
    </footer>
  );
}
export default Footer;