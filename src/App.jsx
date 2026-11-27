import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ListaPontos from './pages/ListaPontos'
import PontoFormulario from './pages/PontoFormulario'
import DetalhePonto from './pages/DetalhePonto'
import NaoEncontrado from './pages/NaoEncontrado'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/pontos" element={<ListaPontos />} />
          <Route path="/pontos/novo" element={<PontoFormulario key="novo" />} />
          <Route path="/pontos/:id" element={<DetalhePonto />} />
          <Route path="/pontos/:id/editar" element={<PontoFormulario key="editar" />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </main>
      <footer className="rodape">GeoPoint · Cadastro de pontos geográficos</footer>
    </>
  )
}