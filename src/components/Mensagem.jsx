export default function Mensagem({ children, tipo = 'info' }) {
  return (
    <div className={`mensagem mensagem--${tipo}`} role={tipo === 'erro' ? 'alert' : 'status'}>
      {children}
    </div>
  )
}