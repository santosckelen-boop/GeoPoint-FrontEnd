import CampoTexto from './CampoTexto'

export default function FiltroPontos({ texto, onFiltrar }) {
  return (
    <CampoTexto id="filtro" rotulo="Filtrar pontos" type="search"
      placeholder="Digite um nome ou uma descrição" value={texto}
      onChange={(evento) => onFiltrar(evento.target.value)} />
  )
}