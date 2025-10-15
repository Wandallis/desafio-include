import GameCardCSS from "./GameCard.module.css";
import { Link } from "react-router-dom";
import IconeAvaliacao from "../IconeAvaliacao/IconeAvaliacao";
import { FaXbox, FaPlaystation, FaWindows } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import IconePlataforma from "../Plataformas/Plataforma";

function GameCard({ cards }) {
	return (
		<div className={GameCardCSS.cards}>
			{cards.map((card, index) => (
				<Link
					key={card.id}
					to={`/game/${card.id}`}
					className={GameCardCSS.cardLink}
				>
					<div key={index} className={GameCardCSS.card}>
						<img
							src={card.imageUrl}
							alt={card.title}
							className={GameCardCSS.image}
						/>

						<div className={GameCardCSS.blocoPrincipal}>
							<div className={GameCardCSS.titleAvaliacao}>
								<h2 className={GameCardCSS.title}>{card.title}</h2>
								<p className={GameCardCSS.genre}>{card.genre}</p>
							</div>

							<div className={GameCardCSS.iconBox}>
								<IconeAvaliacao nota={card.nota} />
							</div>
						</div>

						<div className={GameCardCSS.blocoDescricao}>
							<p className={GameCardCSS.description}>{card.description}</p>
						</div>

						<div className={GameCardCSS.blocoPlataforma}>
							<IconePlataforma
								plataformas={card.plataform}
								className={GameCardCSS.plataforma}
							/>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default GameCard;
