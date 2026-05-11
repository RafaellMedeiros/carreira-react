import { AcademicCapIcon, BuildingLibrary, BuildingOffice } from "./components/Icons"
import './App.css'
import { Main } from "./components/Main"

function App() {

  const cardInfos = [
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingLibrary />
    },
        {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingLibrary />
    },
        {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingLibrary />
    },
        {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <AcademicCapIcon />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingOffice />
    },
    {
      title: "Card Title",
      description: "This is a simple card.",
      icon: <BuildingLibrary />
    }
  ]


  return (
    <div className="app">
      <Main cardInfos={cardInfos} />
    </div>
  )
}



export default App
