import { CardInfo } from "../CardInfo";
import './styles.css'

export function Main({ cardInfos, onCardClick }) {
  return (
    <main>
      {cardInfos.map((info, index) => (
        <CardInfo 
          key={index} 
          title={info.title} 
          description={info.description} 
          selected={info.selected}
          onClick={() => onCardClick(index)}
        >
          {info.icon}
        </CardInfo>
      ))}
    </main>
  );
}
