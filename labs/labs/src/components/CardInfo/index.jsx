import './styles.css'

export function CardInfo({ title, description, children, onClick, selected }) {
  return (
    <section className={`card-info ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="card-info-header">
        {children}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}