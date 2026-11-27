export default function CampoTexto({ id, rotulo, ajuda, type = 'text', ...props }) {
  return (
    <div className="campo">
      <label htmlFor={id}>{rotulo}</label>
      <input id={id} type={type} aria-describedby={ajuda ? `${id}-ajuda` : undefined} {...props} />
      {ajuda && <small id={`${id}-ajuda`}>{ajuda}</small>}
    </div>
  )
}