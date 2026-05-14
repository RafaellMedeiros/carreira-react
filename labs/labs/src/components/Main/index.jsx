import { use } from "react";
import { CardInfo } from "../CardInfo";
import './styles.css'
import CardContext from "../CardsProvider/CardContext";
import { AcademicCapIcon, BuildingLibrary, BuildingOffice } from "../Icons";

export function Main() {
  const {cards, handleCardClick} = use(CardContext)

  return (
    <main>
      {cards.map((info, index) => (
        <CardInfo 
          key={index} 
          title={info.title} 
          description={info.description} 
          selected={info.selected}
          onClick={() => handleCardClick(index)}
        >
          <AcademicCapIcon />
        </CardInfo>
      ))}
    </main>
  );
}
