import { useParams, Link } from "react-router-dom";
import styles from "./DetailsGame.module.css";
import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import gamesData from "../../Data/GamesData";
import IconePlataforma from "../../componentes/Plataformas/Plataforma";
import IconeAvaliacao from "../../componentes/IconeAvaliacao/IconeAvaliacao";

export default function PageDetailsGame() {
    const { id } = useParams();
    const game = gamesData.find((g) => g.id === String(id));

    if (!game) {
        return <p style={{ color: "white", textAlign: "center" }}>Jogo não encontrado 😢</p>;
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.main}>
                
                {/* Bloco principal */}
                <div className={styles.blocoDescricoes}>    
                    <img src={game.imageUrl} alt={game.title} className={styles.image} />
                    <div className={styles.info}>
                        <h1 className={styles.title}>{game.title}</h1>
                        <p className={styles.genre}>{game.genre}</p>
                        <p className={styles.releaseDate}>Lançamento: {game.releaseDate}</p>
                        <IconePlataforma plataformas={game.plataform} />
                        <p className={styles.description}>{game.description}</p>
                        <div className={styles.blocoInserirAvaliacao}>
                            <form className={styles.formulario}>
                                <input placeholder="digite" ></input>
                            </form>
                            <div className={styles.blocoIconeAvaliacao}>
                                <IconeAvaliacao nota={3} className={styles.avaliacaoDetalhes}/>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Blocos adicionais */}
                <div className={styles.infoBlocks}>
                    <div className={styles.block}>Informação extra 1</div>
                    <div className={styles.block}>Informação extra 2</div>
                    <div className={styles.block}>Informação extra 3</div>
                </div>

                <Link to="/" className={styles.backButton}>⬅️ Voltar</Link>
            </div>
            <Footer />
        </div>
    );
}
