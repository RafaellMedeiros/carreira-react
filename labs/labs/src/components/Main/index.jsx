import { CardInfo } from "../CardInfo";
import './styles.css'

export function Main({ cardInfos }) {
  return (
    <main>
      {cardInfos.map((info, index) => (
        <CardInfo key={index} title={info.title} description={info.description}>
          {info.icon}
        </CardInfo>
      ))}
    </main>
  );
}
