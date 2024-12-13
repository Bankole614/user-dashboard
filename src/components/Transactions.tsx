import { Card } from "./constants/dashboard-consts";
import CardData from "./CardData";
import { ExpenseChart } from "./DashboardCharts";
import TransactionsTable from "./TransactionsTable";
import { useNavigate } from "react-router-dom";


interface CardProps {
  cards: Card[];
}

const Transactions: React.FC<CardProps> = ({ cards }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between overflow-x-auto no-scrollbar gap-4">
        <div className="flex flex-col">
        <div className="flex justify-between mb-2">
            <h2 className="text-neutral-600 text-lg font-semibold">My Cards</h2>
            <button
              onClick={() => navigate("/credit-cards")}
              className="hover:text-blue-600 transition-all duration-300 text-neutral-600 font-semibold"
            >
              See all
            </button>
          </div>
          <div className="flex justify-between  no-scrollbar  gap-4">
            {
              cards.slice(1, 4).map((card) => (
                <CardData key={card.id} card={card} />
              ))
            }
          </div>
        </div>
        <div className="min-w-[300px] w-full">
          <ExpenseChart />
        </div>
      </div>
      <div>
        <TransactionsTable />
      </div>
    </div>
    
  )
}

export default Transactions