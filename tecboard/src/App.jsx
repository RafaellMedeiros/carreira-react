import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";

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
