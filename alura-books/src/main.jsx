import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from "./components/Books/index.jsx";
import About from "./components/About/index.jsx";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  .main {
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
    min-height: 100vh;
    width: 100%;
    padding: 1% 5%;
  }
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
