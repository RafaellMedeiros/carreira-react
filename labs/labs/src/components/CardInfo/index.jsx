import './styles.css'

export function CardInfo({ title, description, children }) {
  return (
    <section className="card-info">
      <div className="card-info-header">
        {children}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}