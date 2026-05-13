import { AcademicCapIcon, BuildingLibrary, BuildingOffice } from "./components/Icons"
import './App.css'
import { Main } from "./components/Main"
import { useState } from "react"

function App() {

  const [cards, setCards] = useState([
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingLibrary />
    },
        {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingLibrary />
    },
        {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingLibrary />
    },
        {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      selected: false,
      icon: <BuildingLibrary />
    }
  ]);

  const handleCardClick = (index) => {
    setCards(prevCards => prevCards.map((card, i) => ({
      ...card,
      selected: i === index ? !card.selected : card.selected
    })));
  }

  return (
    <div className="app">
      <Main cardInfos={cards} onCardClick={handleCardClick} />
    </div>
  )
}



export default App
