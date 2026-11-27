// API oficial GeoPoint (Spring Boot). A origem pode ser ajustada no .env.
const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'
const RECURSO = `${API_BASE_URL.replace(/\/$/, '')}/api/points`

async function requisitar(caminho = '', opcoes = {}) {
  let resposta
  try {
    resposta = await fetch(`${RECURSO}${caminho}`, opcoes)
  } catch {
    throw new Error('Não foi possível conectar à API. Confira se ela está ligada e se a URL está correta.')
  }
  if (!resposta.ok) {
    // A API oficial devolve suas mensagens de validação como texto.
    if (resposta.status === 400) {
      const detalhe = await resposta.text()
      throw new Error(detalhe || 'Confira os dados informados e tente novamente.')
    }
    const mensagem = resposta.status === 404
      ? 'Ponto não encontrado. Ele pode ter sido excluído.'
      : `Não foi possível concluir a operação (HTTP ${resposta.status}). Tente novamente.`
    throw new Error(mensagem)
  }
  // DELETE retorna 204: não existe JSON para ler nessa resposta.
  if (resposta.status === 204) return null
  return resposta.json()
}

export function listarPontos() {
  return requisitar()
}

export function buscarPonto(id) {
  return requisitar(`/${encodeURIComponent(id)}`)
}

export function criarPonto(ponto) {
  return requisitar('', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ponto),
  })
}

export function atualizarPonto(id, ponto) {
  return requisitar(`/${encodeURIComponent(id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ponto),
  })
}

export function excluirPonto(id) {
  return requisitar(`/${encodeURIComponent(id)}`, { method: 'DELETE' })
}