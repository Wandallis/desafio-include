import Navbar from "../../componentes/Navbar/Navbar"
import styles from "./Home.module.css"
import Footer from "../../componentes/Footer/Footer"
import GameCard from "../../componentes/GameCard/GameCard"
import gamesData from "../../Data/GamesData"
import { useState } from "react"
function Home() {

  const [buscar, setBuscar] = useState(""); 
  const filterGame = gamesData.filter((game) => 
    game.title.toLowerCase().includes(buscar.toLowerCase())
  );
  return (
    
    <div className={styles.container}>
      
      <Navbar buscar = {buscar} setBuscar = {setBuscar}/>
      <div className={styles.main}>
        

        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Avalie seu game</h1>
          <p className={styles.bannerSubtitle}>Descubra, avalie e compartilhe suas experiências de jogos!</p>
        </div>

        
        <GameCard cards={filterGame} />
        
      </div>
      <Footer />
    </div>
    


    
  )
}
export default Home
