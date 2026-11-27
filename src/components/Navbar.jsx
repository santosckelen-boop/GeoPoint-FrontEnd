import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="cabecalho">
      <div className="navbar">
        <Link className="marca" to="/pontos">GeoPoint<span>Pontos geográficos</span></Link>
        <nav aria-label="Menu principal">
          <NavLink to="/pontos" end>Lista de pontos</NavLink>
          <NavLink to="/pontos/novo">Cadastrar ponto</NavLink>
        </nav>
      </div>
    </header>
  )
}