import { useEffect, useState } from "react";
import CardContext from "./CardContext";

const CARDS = 'CARDS';

export function CardProvider({ children }) {

    const savedCards = localStorage.getItem(CARDS)

    const [cards, setCards] = useState(savedCards ? JSON.parse(savedCards) : []);

    useEffect(() => {
        localStorage.setItem(CARDS, JSON.stringify(cards))
    }, [cards])

    const handleCardClick = (index) => {
    setCards(prevCards => prevCards.map((card, i) => ({
        ...card,
        selected: i === index ? !card.selected : card.selected
    })));
    }

    return (
        <CardContext
            value={{
                handleCardClick,
                cards
            }}
        >
            {children}
        </CardContext>
    )
}