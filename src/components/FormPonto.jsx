import { useState } from 'react'
import { Link } from 'react-router-dom'
import Botao from './Botao'
import CampoTexto from './CampoTexto'
import Mensagem from './Mensagem'

export default function FormPonto({ ponto, onSalvar, salvando }) {
  const [dados, setDados] = useState({
    name: ponto?.name ?? '',
    description: ponto?.description ?? '',
    latitude: String(ponto?.latitude ?? ''),
    longitude: String(ponto?.longitude ?? ''),
  })
  const [erroValidacao, setErroValidacao] = useState('')

  function alterarCampo(evento) {
    const { name, value } = evento.target
    setDados({ ...dados, [name]: value })
    setErroValidacao('')
  }

  function enviar(evento) {
    evento.preventDefault()
    if (salvando) return
    const latitude = Number(dados.latitude)
    const longitude = Number(dados.longitude)
    const nome = dados.name.trim()

    if (!nome || nome.length > 100) {
      setErroValidacao('Informe um nome com até 100 caracteres.')
      return
    }
    if (dados.description.length > 255) {
      setErroValidacao('A descrição deve ter até 255 caracteres.')
      return
    }
    if (dados.latitude.trim() === '' || !Number.isFinite(latitude) || latitude < -90 || latitude > 90) {
      setErroValidacao('Informe uma latitude numérica entre -90 e 90.')
      return
    }
    if (dados.longitude.trim() === '' || !Number.isFinite(longitude) || longitude < -180 || longitude > 180) {
      setErroValidacao('Informe uma longitude numérica entre -180 e 180.')
      return
    }
    setErroValidacao('')
    onSalvar({ name: nome, description: dados.description.trim(), latitude, longitude })
  }

  return (
    <form onSubmit={enviar} noValidate>
      {erroValidacao && <Mensagem tipo="erro">{erroValidacao}</Mensagem>}
      <fieldset disabled={salvando}>
        <legend className="somente-leitor">Dados do ponto</legend>
        <CampoTexto id="name" name="name" rotulo="Nome *" value={dados.name} onChange={alterarCampo} required maxLength={100} placeholder="Ex.: Praça Central" ajuda="Obrigatório. Até 100 caracteres." />
        <CampoTexto id="description" name="description" rotulo="Descrição" value={dados.description} onChange={alterarCampo} maxLength={255} placeholder="Ex.: Praça principal da cidade" ajuda="Opcional. Até 255 caracteres." />
        <div className="campos-coordenadas">
          <CampoTexto id="latitude" name="latitude" type="number" rotulo="Latitude *" value={dados.latitude} onChange={alterarCampo} required step="any" min={-90} max={90} placeholder="-28.2825" ajuda="De -90 a 90. Ex.: -28.2825" />
          <CampoTexto id="longitude" name="longitude" type="number" rotulo="Longitude *" value={dados.longitude} onChange={alterarCampo} required step="any" min={-180} max={180} placeholder="-52.7869" ajuda="De -180 a 180. Ex.: -52.7869" />
        </div>
      </fieldset>
      <p className="texto-apoio">* Campos obrigatórios. Use ponto para separar as casas decimais.</p>
      <div className="acoes-formulario">
        <Botao type="submit" disabled={salvando}>{salvando ? 'Salvando...' : 'Salvar ponto'}</Botao>
        <Link className="botao botao--secundario" to="/pontos">Cancelar</Link>
      </div>
    </form>
  )
}