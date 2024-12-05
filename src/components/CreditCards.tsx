import { Card } from "./constants/dashboard-consts";
import CardData from "./CardData";

interface CardProps {
  cards: Card[];
}

const CreditCards: React.FC<CardProps> = ({ cards }) => {
  return (
    <div>
      <h2 className="mb-2 text-neutral-600 font-semibold">My Cards</h2>
      <div className="flex justify-between bg- overflow-x-auto no-scrollbar gap-4">
        {cards.map((card) => (
          <CardData card={card} />
        ))}
      </div>
    </div>
  );
};



export default CreditCards;
