import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Banner } from "./components/Banner";
import { Tema } from "./components/Tema";
import { CardEvento } from "./components/CardEvento";
import { useState } from "react";

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

  const [eventos, setEventos] = useState([
    {
      imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      titulo: 'Mulheres no Front',
      tema: temas[0],
      data: new Date(),
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    },
        {
      imagem: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_2.png',
      titulo: 'Opa',
      tema: temas[0],
      data: new Date(),
      descricao: 'Valorizando e impulsionando a participação feminina no desenvolvimento front-end.'
    }
  ]);

  const adicionaEvento = (evento) => {
    setEventos([...eventos, evento]);
  }

  return (
    <>
      <header>
        <img src="/logo.png" alt="TecBoard Logo" />
      </header>
      <main>
        <Banner></Banner>
        <FormularioDeEvento temas={temas} adicionaEvento={adicionaEvento} />
        <section className="conteiner">
          {temas.map(tema => (
            <section key={tema.id}>
              <Tema date={tema} />
              <div className="conteiner-cards">
                {eventos.filter(evento => evento.tema.id === tema.id).map((evento, index) => {
                  return <CardEvento key={index} evento={evento} />;
                })}
              </div>
            </section>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
