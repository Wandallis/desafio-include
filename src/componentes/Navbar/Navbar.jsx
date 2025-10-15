import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import logoimg from "../../midias/logoimage.png";
import Button from "../Button/Button";

export default function Navbar({ buscar, setBuscar }) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className={styles.navbar}>
			{/* Logo */}
			<div className={styles.logo}>
				<img src={logoimg} alt="Logo" className={styles.logoimg} />
				<h1>META K-GAMES</h1>
			</div>

			{/* Botão do menu mobile */}
			<div
				className={`${styles.menuToggle} ${menuOpen ? styles.active : ""}`}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* Bloco de navegação + barra de pesquisa (mobile inclusa) */}
			<div className={`${styles.menuContainer} ${menuOpen ? styles.open : ""}`}>
				<div className={styles.links}>
					<Link
						to="/"
						className={styles.link}
						onClick={() => setMenuOpen(false)}
					>
						Home
					</Link>
					<Link
						to="/Categorias"
						className={styles.link}
						onClick={() => setMenuOpen(false)}
					>
						Categorias
					</Link>
					<Link
						to="/Sobre"
						className={styles.link}
						onClick={() => setMenuOpen(false)}
					>
						Sobre
					</Link>
				</div>

				<div className={styles.searchMobile}>
					<SearchBar buscar={buscar} setBuscar={setBuscar} />
					<Button />
				</div>
			</div>

			{/* Ações (visíveis no desktop) */}
			<div className={styles.actions}>
				<SearchBar buscar={buscar} setBuscar={setBuscar} />
				<Button />
			</div>
		</nav>
	);
}
