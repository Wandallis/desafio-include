import { FaXbox, FaPlaystation, FaWindows } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import styles from "./IconePlataforma.module.css";

export default function IconePlataforma({ plataformas }) {
  return (
    <div className={styles.iconsBox}>
      {plataformas?.includes("xbox") && <FaXbox size={20} color="#107C10" />}
      {plataformas?.includes("playstation") && <FaPlaystation size={24} color="#003791" />}
      {plataformas?.includes("pc") && <FaWindows size={20} color="#0078D7" />}
      {plataformas?.includes("nintendo") && <SiNintendoswitch size={20} color="#E60012" />}
    </div>
  );
}