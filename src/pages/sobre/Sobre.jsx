import Navbar from "../../componentes/Navbar/Navbar";
import Footer from "../../componentes/Footer/Footer";
import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.sobreBloco}>
          <h1 className={styles.titulo}>Sobre o META K-GAMES</h1>
          <p className={styles.texto}>
            O <strong>META K-GAMES</strong> é uma plataforma criada para todos
            os apaixonados por jogos que desejam compartilhar suas experiências,
            opiniões e avaliações sobre seus títulos favoritos. Nosso objetivo é
            construir uma comunidade colaborativa onde jogadores possam expressar
            o que amam (ou odeiam) em cada jogo, ajudando outros usuários a
            descobrir novas aventuras e decidir o que vale a pena jogar.
          </p>

          <p className={styles.texto}>
            Aqui você pode <strong>avaliar jogos</strong> com notas de 0 a 10,
            escrever comentários e acompanhar a média das avaliações da
            comunidade. Cada jogo conta com uma página dedicada que exibe sua
            capa, informações técnicas, gênero, data de lançamento e muito mais.
          </p>

          <p className={styles.texto}>
            Nosso propósito é tornar o ato de jogar ainda mais divertido —
            conectando pessoas com gostos parecidos e criando um espaço de troca
            sincera entre gamers de todos os estilos. Se você ama games tanto
            quanto nós, este é o seu lugar!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Sobre;
