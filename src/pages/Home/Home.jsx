import Navbar from "../../componentes/Navbar"
import styles from "./Home.module.css"
import Footer from "../../componentes/Footer"
import GameCard from "../../componentes/GameCard"
function Home() {
  return (
    
    <div className={styles.container}>
      
      <Navbar/>
      <div className={styles.main}>
        <div className={styles.banner}>
          <h1 className={styles.bannerTitle}>Avalie seu game</h1>
          <p className={styles.bannerSubtitle}>Descubra, avalie e compartilhe suas experiências de jogos!</p>
        </div>
        <GameCard />
        
      </div>
      <Footer />
    </div>
    


    
  )
}
export default Home
