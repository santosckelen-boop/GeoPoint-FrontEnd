import { Link } from 'react-router-dom'
import Botao from './Botao'

export default function LinhaPonto({ ponto, onExcluir, excluindoId }) {
  return (
    <tr>
      <td data-rotulo="Nome"><Link className="nome-ponto" to={`/pontos/${ponto.id}`}>{ponto.name}</Link></td>
      <td data-rotulo="Descrição">{ponto.description || 'Sem descrição'}</td>
      <td data-rotulo="Latitude" className="coordenada">{ponto.latitude}</td>
      <td data-rotulo="Longitude" className="coordenada">{ponto.longitude}</td>
      <td data-rotulo="Ações">
        <div className="acoes-linha">
          <Link className="botao botao--secundario" to={`/pontos/${ponto.id}`} aria-label={`Ver ${ponto.name}`}>Ver</Link>
          <Link className="botao botao--secundario" to={`/pontos/${ponto.id}/editar`} aria-label={`Editar ${ponto.name}`}>Editar</Link>
          <Botao variante="perigo" onClick={() => onExcluir(ponto)} disabled={Boolean(excluindoId)} aria-label={`Excluir ${ponto.name}`}>
            {excluindoId === ponto.id ? 'Excluindo...' : 'Excluir'}
          </Botao>
        </div>
      </td>
    </tr>
  )
}