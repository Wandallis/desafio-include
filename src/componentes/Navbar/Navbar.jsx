import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import logoimg from "../../midias/logoimage.png"
import Button from "../Button/Button";
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logoimg} alt="Logo" className={styles.logoimg} />
                <h1>META K-GAMES</h1>
            </div>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>Home</Link>
                {/* <Link to="/detailsGame" className={styles.link}>Avaliações</Link> */}
                <Link to="/Categorias" className={styles.link}>Categorias</Link>
                {/* <Link to="/lancamentos" className={styles.link}>Lançamento</Link>
                <Link to="/Colecoes" className={styles.link}>Coleções</Link> */}
                <Link to="/Sobre" className={styles.link}>Sobre</Link>
                {/* <Link to="/Contato" className={styles.link}>Contato</Link> */}
            </div>
            <SearchBar />
            <Button />

        </div>
    );
}
