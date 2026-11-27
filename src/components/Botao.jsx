export default function Botao({ children, variante = 'primario', type = 'button', ...props }) {
  return <button type={type} className={`botao botao--${variante}`} {...props}>{children}</button>
}