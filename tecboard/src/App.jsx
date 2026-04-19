import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Banner } from "./components/Banner";
import { Tema } from "./components/Tema";

function App() {
  const temas = [
    {
      id: 1,
      name: 'front-end'
    },
    {
      id: 2,
      name: 'back-end'
    },
    {
      id: 3,
      name: 'devops'
    },
    {
      id: 4,
      name: 'inteligencia artificial'
    },
    {
      id: 5,
      name: 'data science'
    },
    {
      id: 6,
      name: 'cloud'
    },
  ]

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="TecBoard Logo" />
        </header>
        <Banner></Banner>
        <FormularioDeEvento />
      </main>
      {temas.map(tema => (
        <section key={tema.id}>
          <Tema date={tema}/>
        </section>
      ))}
    </>
  );
}

export default App;
