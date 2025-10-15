import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./DetailsGame.module.css";
import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import gamesData from "../../Data/GamesData";
import IconePlataforma from "../../componentes/Plataformas/Plataforma";
import IconeAvaliacao from "../../componentes/IconeAvaliacao/IconeAvaliacao";

export default function PageDetailsGame() {
	const { id } = useParams();
	const game = gamesData.find((g) => g.id === String(id));

	const [avaliacoes, setAvaliacoes] = useState([
		{ usuario: "Você", nota: game.nota, comentario: "Minha avaliação inicial." },
	]);

	const [novoUsuario, setNovoUsuario] = useState("");
	const [novaNota, setNovaNota] = useState("");
	const [novoComentario, setNovoComentario] = useState("");
	const [mostrarModal, setMostrarModal] = useState(false);

	if (!game) {
		return (
			<p style={{ color: "white", textAlign: "center" }}>
				Jogo não encontrado
			</p>
		);
	}

	const mediaNotas =
		avaliacoes.length > 0
			? (
					avaliacoes.reduce((a, b) => a + Number(b.nota), 0) / avaliacoes.length
			  ).toFixed(1)
			: game.nota;

	const adicionarAvaliacao = (e) => {
		e.preventDefault();
		if (!novaNota || novaNota < 0 || novaNota > 10 || !novoComentario.trim()) return;

		const novaAvaliacao = {

			usuario: novoUsuario,
			nota: Number(novaNota),
			comentario: novoComentario,
		};

		setAvaliacoes([...avaliacoes, novaAvaliacao]);
		setNovaNota("");
		setNovoComentario("");
		setMostrarModal(false);
	};

	return (
		<div className={styles.container}>
			<Navbar />

			<div className={styles.main}>
				<Link to="/" className={styles.backButton}>
					Voltar
				</Link>

				<div className={styles.blocoDescricoes}>
					<img
						src={game.imageUrl}
						alt={game.title}
						className={styles.image}
					/>

					<div className={styles.info}>
						<h1 className={styles.title}>{game.title}</h1>
						<p className={styles.genre}>{game.genre}</p>
						<p className={styles.releaseDate}>Lançamento: {game.releaseDate}</p>

						<IconePlataforma plataformas={game.plataform} />

						<p className={styles.description}>{game.description}</p>

						<div className={styles.blocoInserirAvaliacao}>
							<button
								className={styles.botaoAdd}
								onClick={() => setMostrarModal(true)}
							>
								+ Avaliar
							</button>

							<div className={styles.blocoIconeAvaliacao}>
								<IconeAvaliacao
									nota={mediaNotas}
									className={styles.avaliacaoDetalhes}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Modal de avaliação */}
				{mostrarModal && (
					<div className={styles.modalOverlay}>
						<div className={styles.modalCard}>
							<h2>Adicionar Avaliação</h2>

							<form onSubmit={adicionarAvaliacao}>
								<input
									type="text"
									placeholder="Seu nome"
									value={novoUsuario}
									onChange={(e) => setNovoUsuario(e.target.value)}
									className={styles.inputNota}
								/>
								<input
									type="number"
									placeholder="Nota (0 a 10)"
									value={novaNota}
									onChange={(e) => setNovaNota(e.target.value)}
									className={styles.inputNota}
								/>

								<textarea
									placeholder="Escreva sua avaliação..."
									value={novoComentario}
									onChange={(e) => setNovoComentario(e.target.value)}
									className={styles.textareaComentario}
								/>

								<div className={styles.modalBotoes}>
									<button type="submit" className={styles.botaoSalvar}>
										Salvar
									</button>

									<button
										type="button"
										className={styles.botaoCancelar}
										onClick={() => setMostrarModal(false)}
									>
										Cancelar
									</button>
								</div>
							</form>
						</div>
					</div>
				)}

				<div className={styles.blockReview}>
					<p className={styles.titleReview}>REVIEWS</p>
				</div>

				{/* Reviews dos usuários nos blocks */}
				<div className={styles.infoBlocks}>
					{avaliacoes.map((avaliacao, index) => (
						<div key={index} className={styles.block}>
							<h3 className={styles.nomeUsuario}>{avaliacao.usuario}</h3>

							<IconeAvaliacao
								nota={avaliacao.nota}
								className={styles.avaliacaoDetalhes}
							/>

							<p className={styles.comentarioTexto}>
								{avaliacao.comentario}
							</p>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
}
