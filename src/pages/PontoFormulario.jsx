import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { atualizarPonto, buscarPonto, criarPonto } from '../services/api'
import FormPonto from '../components/FormPonto'
import Mensagem from '../components/Mensagem'

export default function PontoFormulario() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ponto, setPonto] = useState(null)
  const [carregando, setCarregando] = useState(Boolean(id))
  const [erroCarga, setErroCarga] = useState('')
  const [erroSalvar, setErroSalvar] = useState('')
  const [salvando, setSalvando] = useState(false)

  useEffect(() => {
    if (!id) return
    let ativo = true
    async function carregar() {
      setCarregando(true)
      setErroCarga('')
      try {
        const dados = await buscarPonto(id)
        if (ativo) setPonto(dados)
      } catch (erro) {
        if (ativo) setErroCarga(erro.message)
      } finally {
        if (ativo) setCarregando(false)
      }
    }
    carregar()
    return () => { ativo = false }
  }, [id])

  async function salvar(dados) {
    if (salvando) return
    setSalvando(true)
    setErroSalvar('')
    try {
      if (id) await atualizarPonto(id, dados)
      else await criarPonto(dados)
      navigate('/pontos')
    } catch (erro) {
      setErroSalvar(erro.message)
    } finally {
      setSalvando(false)
    }
  }

  return (
    <>
      <div className="titulo-pagina">
        <div><p className="sobretitulo">Pontos geográficos</p><h1>{id ? 'Editar ponto' : 'Cadastrar ponto'}</h1><p>{id ? 'Atualize os dados do local selecionado.' : 'Informe os dados do novo local.'}</p></div>
        <Link className="link-texto" to="/pontos">Voltar para a lista</Link>
      </div>
      <section className="cartao cartao--formulario" aria-label="Formulário do ponto">
        {carregando && <Mensagem>Carregando...</Mensagem>}
        {erroCarga && <Mensagem tipo="erro">{erroCarga}</Mensagem>}
        {erroSalvar && <Mensagem tipo="erro">{erroSalvar}</Mensagem>}
        {!carregando && !erroCarga && <FormPonto key={id ?? 'novo'} ponto={ponto} onSalvar={salvar} salvando={salvando} />}
      </section>
    </>
  )
}