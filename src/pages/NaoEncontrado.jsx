import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <section className="cartao nao-encontrado">
      <p className="sobretitulo">Erro 404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não corresponde a uma tela do GeoPoint.</p>
      <Link className="botao botao--primario" to="/pontos">Ir para a lista de pontos</Link>
    </section>
  )
}