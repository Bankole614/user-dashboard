import { account, invoice } from "./constants/account-consts"
import { transaction } from "./constants/dashboard-consts";
import { Card } from "./constants/dashboard-consts";
import CardData from "./CardData";
import { useNavigate } from "react-router-dom";
import { DebitCreditOverview } from "./DashboardCharts";


interface CardProps {
  cards: Card[];
}

const Accounts: React.FC<CardProps> = ({ cards }) => {

  const navigate = useNavigate();

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-yellow-400 bg-yellow-100";
      case 2:
        return "text-blue-400 bg-blue-100";
        case 3:
        return "text-pink-400 bg-pink-100";
      default:
        return "text-green-400 bg-green-100";
    }
  };

  const color = (id: number): string => {
    switch (id) {
      case 4:
        return "text-green-500 bg-green-100";
      case 5:
        return "text-blue-500 bg-blue-100";
      default:
        return "text-pink-500 bg-pink-100";
    }
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
        {
          account.map((account) => (
            <div key={account.id} className="flex items-center justify-center  gap-3 sm:gap-6 py-4 xl:px-8 px-2 bg-white rounded-2xl">
              <div>
                <p  className={`p-4 rounded-full ${colorClass(account.id)} `} >{<account.icon size={24} />}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm lg:text-base">{account.title}</p>
                <p className="font-semibold xl:text-xl">{account.amount}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-between overflow-x-auto no-scrollbar gap-4">
        <div className="w-full">
          <h2 className="text-neutral-600  text-lg font-semibold mb-2">Recent Transactions</h2>
          
            <div className="flex flex-col gap-4 px-4 justify-center bg-white rounded-2xl text-slate-400 h-48">
            {transaction.slice(3, 6).map((item) => (
              <div key={item.id} className='flex items-center justify-between gap-4'>
                
                <div className="flex gap-6">
                  <div className={`p-3 flex-shrink-0 rounded-2xl ${color(item.id)} `}>{<item.icon size={22} />}</div>
                  <div className="flex flex-col min-w-44 text-left">
                    <p className="text-black">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.date}</p>
                  </div>
                  
                </div>
                <p className="text-sm min-w-28 text-left hidden 2xl:block">{item.type}</p>
                <p className="text-sm min-w-44 text-left hidden xl:block">{item.cardNo}</p>
                <p className="text-sm min-w-24 text-left hidden lg:block">{item.status}</p>
                <p className={`${item.type === 'Transfer' ? 'text-green-500' : 'text-red-500'} min-w-16 text-center`}>{item.amount}</p>
              </div>
            ))}
            </div>
          
        </div>

        <div className="flex flex-col w-[300px] ">
          <div className="flex justify-between mb-2">
            <h2 className="text-neutral-600 text-lg font-semibold">My Cards</h2>
            <button
              onClick={() => navigate("/credit-cards")}
              className="hover:text-blue-600 transition-all duration-300 text-neutral-600 font-semibold"
            >
              See all
            </button>
          </div>

          <div className="">
          {
          cards.slice(0, 1).map((card) => (
          <CardData key={card.id} card={card} />
          ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 items-center gap-4 grid-cols-1  mb-4">
        <div className="lg:col-span-2">
          <DebitCreditOverview />
        </div>
        <div>
          <h2 className="text-neutral-600 text- text-lg font-semibold mb-2">Invoices Sent</h2>
          <div className="bg-white h-80 rounded-2xl p-6 flex flex-col gap-6 justify-center">
            {
              invoice.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between">
                  <div className="flex gap-6">
                    <div className={`p-3 flex-shrink-0 rounded-2xl ${colorClass(invoice.id)} `}>{<invoice.icon size={22} />}</div>
                    <div className="flex flex-col">
                      <p className="">{invoice.title}</p>
                      <p className="text-slate-400 text-sm">{invoice.time}</p>
                    </div>
                  </div>
                  <p className="text-slate-400">{invoice.amount}</p>
                  
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Accounts