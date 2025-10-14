import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import PageDetailsGame from '../pages/DetailsGame/PageDetailsGame';
import GamesData from '../Data/GamesData';
import GameCard from "../componentes/GameCard/GameCard";
import PageLancamento from '../pages/Lancamentos/PageLancamento';
import PageAvaliacoes from '../pages/Avaliacoes/PageAvaliacoes';
import PageCategorias from '../pages/Categorias/PageCategorias';
import PageColecoes from '../pages/Colecoes/PageColecoes';  
import Sobre from "../pages/sobre/Sobre";
import Contato from '../pages/contato/Contato'

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gamesData" element={<GameCard cards={GamesData} />} />
      <Route path="/game/:id" element={<PageDetailsGame/>} />
      <Route path="/lancamentos" element={<PageLancamento />} />
      <Route path="/avaliacoes" element={<PageAvaliacoes />} />
      <Route path="/categorias" element={<PageCategorias />} />
      <Route path="/colecoes" element={<PageColecoes />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  )
}

export default RoutesApp;
