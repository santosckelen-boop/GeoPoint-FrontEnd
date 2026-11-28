import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { excluirPonto, listarPontos } from '../services/api'
import FiltroPontos from '../components/FiltroPontos'
import TabelaPontos from '../components/TabelaPontos'
import Mensagem from '../components/Mensagem'

export default function ListaPontos() {
  const [pontos, setPontos] = useState([])
  const [filtro, setFiltro] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [erroExclusao, setErroExclusao] = useState('')
  const [excluindoId, setExcluindoId] = useState(null)

  useEffect(() => {
    let ativo = true
    async function carregar() {
      try {
        const dados = await listarPontos()
        if (ativo) setPontos(dados)
      } catch (erro) {
        if (ativo) setErro(erro.message)
      } finally {
        if (ativo) setCarregando(false)
      }
    }
    carregar()
    return () => { ativo = false }
  }, [])

  async function excluir(ponto) {
    if (excluindoId || !window.confirm(`Excluir o ponto "${ponto.name}"?`)) return
    setExcluindoId(ponto.id)
    setErroExclusao('')
    try {
      await excluirPonto(ponto.id)
      setPontos((atuais) => atuais.filter((item) => item.id !== ponto.id))
    } catch (erro) {
      setErroExclusao(erro.message)
    } finally {
      setExcluindoId(null)
    }
  }

  const busca = filtro.trim().toLowerCase()
  const pontosFiltrados = pontos.filter((ponto) =>
    ponto.name.toLowerCase().includes(busca) ||
    (ponto.description ?? '').toLowerCase().includes(busca),
  )

  return (
    <>
      <div className="titulo-pagina">
        <div><p className="sobretitulo">GeoPoint</p><h1>Pontos geográficos</h1><p>Consulte e organize os locais cadastrados.</p></div>
        <Link className="botao botao--primario" to="/pontos/novo">Cadastrar ponto</Link>
      </div>
      <section className="cartao" aria-label="Listagem de pontos">
        <div className="barra-filtro"><FiltroPontos texto={filtro} onFiltrar={setFiltro} /></div>
        {carregando && <Mensagem>Carregando...</Mensagem>}
        {erro && <Mensagem tipo="erro">{erro}</Mensagem>}
        {erroExclusao && <Mensagem tipo="erro">{erroExclusao}</Mensagem>}
        {!carregando && !erro && (
          <>
            <p className="contador" role="status">Exibindo {pontosFiltrados.length} de {pontos.length} ponto(s)</p>
            {pontosFiltrados.length === 0
              ? <Mensagem>Nenhum ponto encontrado</Mensagem>
              : <TabelaPontos pontos={pontosFiltrados} onExcluir={excluir} excluindoId={excluindoId} />}
          </>
        )}
      </section>
    </>
  )
}