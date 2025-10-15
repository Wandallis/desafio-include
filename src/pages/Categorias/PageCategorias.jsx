import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import GameCardCSS from "./Categorias.module.css"; // Renomeei para combinar com o CSS que você mandou
import gamesData from "../../Data/GamesData";
import IconeAvaliacao from "../../componentes/IconeAvaliacao/IconeAvaliacao";
import IconePlataforma from "../../componentes/Plataformas/Plataforma";

function PageCategorias() {
    const categoriasUnicas = ["Todas", ...new Set(gamesData.map((game) => game.category))];
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

    const jogosFiltrados =
        categoriaSelecionada === "Todas"
            ? gamesData
            : gamesData.filter((game) => game.category === categoriaSelecionada);

    return (
        <div className={GameCardCSS.container}>
            <Navbar />

            <div className={GameCardCSS.main}>
                <h1 className={GameCardCSS.tituloPagina}>Categorias</h1>
                <p className={GameCardCSS.subtitulo}>
                    Explore os jogos separados por categoria e descubra novas experiências!
                </p>

                {/* Dropdown de filtro */}
                <div className={GameCardCSS.filtroContainer}>
                    <label htmlFor="categoriaSelect" className={GameCardCSS.labelFiltro}>
                        Filtrar por categoria:
                    </label>
                    <select
                        id="categoriaSelect"
                        value={categoriaSelecionada}
                        onChange={(e) => setCategoriaSelecionada(e.target.value)}
                        className={GameCardCSS.selectFiltro}
                    >
                        {categoriasUnicas.map((categoria, index) => (
                            <option key={index} value={categoria}>
                                {categoria}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Grid de cards */}
                <div className={GameCardCSS.cards}>
                    {jogosFiltrados.map((game) => (
                        <Link
                            key={game.id}
                            to={`/categorias`}
                            className={GameCardCSS.cardLink}
                        >
                            <div className={GameCardCSS.card}>
                                <img
                                    src={game.imageUrl}
                                    alt={game.title}
                                    className={GameCardCSS.image}
                                />

                                <div className={GameCardCSS.blocoPrincipal}>
                                    <div className={GameCardCSS.titleAvaliacao}>
                                        <h2 className={GameCardCSS.title}>{game.title}</h2>
                                        <p className={GameCardCSS.genre}>{game.genre}</p>
                                    </div>
                                    <div className={GameCardCSS.iconBox}>
                                        <IconeAvaliacao nota={game.nota} />
                                    </div>
                                </div>

                                <div className={GameCardCSS.blocoDescricao}>
                                    <p className={GameCardCSS.description}>{game.description}</p>
                                </div>

                                <div className={GameCardCSS.blocoPlataforma}>
                                    <IconePlataforma
                                        plataformas={game.plataform}
                                        className={GameCardCSS.plataforma}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PageCategorias;
