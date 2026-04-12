
import './App.css'

function FormularioDeEvento() {
  return (
    <form action="/">
      <h2>Preencha para criar um evento:</h2>
      <br/>
      <fieldset>
        <label htmlFor="name">Qual o nome do evento?</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="date">Data do evento</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="tema">Tema do evento</label>
        <input type="text" id="tema" name="tema" />

        <br/>
        <input type="submit" value="Criar Evento" />
      </fieldset>

    </form>
  )
}


function App() {
  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="TecBoard Logo" />
        </header>
        <section>
          <img src="/banner.png" alt="TecBoard Banner" />
        </section>
        <FormularioDeEvento />
      </main>
    </>
  )
}

export default App
