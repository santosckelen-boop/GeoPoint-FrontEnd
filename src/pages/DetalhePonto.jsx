import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { buscarPonto, excluirPonto } from '../services/api'
import Botao from '../components/Botao'
import Mensagem from '../components/Mensagem'

export default function DetalhePonto() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ponto, setPonto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [excluindo, setExcluindo] = useState(false)

  useEffect(() => {
    let ativo = true
    async function carregar() {
      setCarregando(true)
      setErro('')
      try {
        const dados = await buscarPonto(id)
        if (ativo) setPonto(dados)
      } catch (erro) {
        if (ativo) {
          setPonto(null)
          setErro(erro.message)
        }
      } finally {
        if (ativo) setCarregando(false)
      }
    }
    carregar()
    return () => { ativo = false }
  }, [id])

  async function excluir() {
    if (excluindo || !window.confirm(`Excluir o ponto "${ponto.name}"?`)) return
    setExcluindo(true)
    setErro('')
    try {
      await excluirPonto(id)
      navigate('/pontos')
    } catch (erro) {
      setErro(erro.message)
    } finally {
      setExcluindo(false)
    }
  }

  return (
    <>
      <div className="titulo-pagina">
        <div><p className="sobretitulo">Pontos geográficos</p><h1>Detalhe do ponto</h1><p>Confira os dados do local selecionado.</p></div>
        <Link className="link-texto" to="/pontos">Voltar para a lista</Link>
      </div>
      <section className="cartao cartao--formulario" aria-label="Dados do ponto">
        {carregando && <Mensagem>Carregando...</Mensagem>}
        {erro && <Mensagem tipo="erro">{erro}</Mensagem>}
        {!carregando && ponto && (
          <>
            <h2 className="nome-detalhe">{ponto.name}</h2>
            <dl className="dados-ponto">
              <div><dt>Identificador</dt><dd className="identificador">{ponto.id}</dd></div>
              <div><dt>Nome</dt><dd>{ponto.name}</dd></div>
              <div><dt>Descrição</dt><dd>{ponto.description || 'Sem descrição'}</dd></div>
              <div><dt>Latitude</dt><dd>{ponto.latitude}</dd></div>
              <div><dt>Longitude</dt><dd>{ponto.longitude}</dd></div>
            </dl>
            <div className="acoes-formulario">
              <Link className="botao botao--primario" to={`/pontos/${id}/editar`}>Editar ponto</Link>
              <Botao variante="perigo" onClick={excluir} disabled={excluindo}>{excluindo ? 'Excluindo...' : 'Excluir ponto'}</Botao>
              <Link className="botao botao--secundario" to="/pontos">Voltar</Link>
            </div>
          </>
        )}
      </section>
    </>
  )
}