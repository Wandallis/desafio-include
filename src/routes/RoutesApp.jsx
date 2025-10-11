import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
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
