import GameCardCSS from './GameCard.module.css';
import { useState } from 'react';

function GameCard({cards}) {
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