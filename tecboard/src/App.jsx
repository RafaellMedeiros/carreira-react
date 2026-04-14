import "./App.css";

function TituloFormulario({ children }) {
  return <h2>{children}</h2>;
}

function FormularioDeEvento() {
  return (
    <form action="/">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <br />
      <fieldset>
        <label htmlFor="name">Qual o nome do evento?</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="date">Data do evento</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="tema">Tema do evento</label>
        <input type="text" id="tema" name="tema" />

        <br />
        <input type="submit" value="Criar Evento" />
      </fieldset>
    </form>
  );
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
  );
}

export default App;
