import { useNavigate } from "react-router-dom";
import { Card } from "./constants/dashboard-consts";
import CardData from "./CardData";


interface CardProps {
  cards: Card[];
}

const DashboardCards: React.FC<CardProps> = ({ cards }) => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-neutral-600 font-semibold mb-2">
        <h2>My Cards</h2>
        <button
          onClick={() => navigate("/credit-cards")}
          className="hover:text-blue-600 transition-all duration-300"
        >
          See all
        </button>
      </div>
      <div className="flex justify-between  no-scrollbar  gap-4">
      {
      cards.slice(0, 3).map((card) => (
      <CardData card={card} />
      ))}
      </div>
    </div>
  )
}

export default DashboardCards