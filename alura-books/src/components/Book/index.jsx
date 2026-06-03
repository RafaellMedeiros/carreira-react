import './styles.css';

export default function Book({ book }) {
  return (
    <section className='bookSection'>
      <img src={book.src} alt={book.nome} />
      <span>{book.nome}</span>
    </section>
  )
}