import LinhaPonto from './LinhaPonto'

export default function TabelaPontos({ pontos, onExcluir, excluindoId }) {
  return (
    <div className="tabela-container">
      <table>
        <caption className="somente-leitor">Pontos geográficos cadastrados</caption>
        <thead><tr>
          <th scope="col">Nome</th><th scope="col">Descrição</th>
          <th scope="col">Latitude</th><th scope="col">Longitude</th><th scope="col">Ações</th>
        </tr></thead>
        <tbody>
          {pontos.map((ponto) => (
            <LinhaPonto key={ponto.id} ponto={ponto} onExcluir={onExcluir} excluindoId={excluindoId} />
          ))}
        </tbody>
      </table>
    </div>
  )
}