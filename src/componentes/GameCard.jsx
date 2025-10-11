import GameCardCSS from './GameCard.module.css';
import { useState } from 'react';

function GameCard() {

  const [cards] = useState([
    { title: 'The Legend of Zelda: Breath of the Wild', description: 'An open-world adventure game set in the kingdom of Hyrule.', imageUrl: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild.jpg' },
    { title: 'Super Mario Odyssey', description: 'A 3D platformer where Mario travels across various worlds to save Princess Peach.', imageUrl: 'https://assets.nintendo.com/image/upload/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5' },
    { title: 'Minecraft', description: 'A sandbox game that allows players to build and explore virtual worlds made of blocks.', imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Minecraft_capa.png/260px-Minecraft_capa.png' },
    { title: 'Fortnite', description: 'A battle royale game where players fight to be the last one standing on an island.', imageUrl: 'https://meups.com.br/wp-content/uploads/2025/02/fortnite-5-900x503.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
    { title: 'Among Us', description: 'A multiplayer game where players work together to complete tasks while trying to identify impostors.', imageUrl: 'https://img.odcdn.com.br/wp-content/uploads/2020/10/20201002091825.jpg' },
  ]);
  return (
    <div className={GameCardCSS.cards}>
      {cards.map((card, index) => (
        
        <div key={index} className={GameCardCSS.card}>
            <img src={card.imageUrl} alt={card.title} className={GameCardCSS.image} />
            <h2 className={GameCardCSS.title}>{card.title}</h2>
            <p className={GameCardCSS.description}>{card.description}</p>
        </div>
        
        
      ))}
    </div>
  );
}
export default GameCard;