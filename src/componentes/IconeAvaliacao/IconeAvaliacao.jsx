import styles from "./IconeAvaliacao.module.css";

export default function IconeAvaliacao({ nota, className }) {
  const getCorDeFundo = (nota) => {
    if (nota <= 4) return "#ff4d4d";
    if (nota <= 6) return "#ffcc00";
    if (nota <= 8) return "#a8e063";
    return "#00a859";
  };

  return (
    <div
      className={`${styles.container} ${className || ""}`}
      style={{ backgroundColor: getCorDeFundo(nota) }}
    >
      <h1>{nota}</h1>
    </div>
  );
}
