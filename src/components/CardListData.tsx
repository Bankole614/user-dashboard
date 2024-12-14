import { cardlist } from "./constants/creditcard-consts";
import { Link } from "react-router-dom";


export const CardListList = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl min-h-80 p-2 min-w-10 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-slate-400 font-bold border-b">
            <tr>
              <th className="py-2 text-left px-4">
              Bank
              </th>
              <th className="py-2 min-w-28 text-left px-4">
                Card Type
              </th>
              <th className="py-2 text-left px-4">
                Card Number
              </th>
              <th className="py-2 text-left px-4">
                Card Name
              </th>
              <th className="py-2 text-left px-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cardlist.map((card) => (
              <tr
                key={card.id}
                style={{
                  backgroundColor: card.id % 2 === 0 ? 'white' : '#f3f4f6',
                }}
              >
                
                <td className="py-4  px-4 whitespace-nowrap">
                  {card.name}
                </td>
                <td className="py-4  px-4 whitespace-nowrap">
                  {card.type}
                </td>
                <td className="py-4  px-4 whitespace-nowrap">
                  {card.cardNo}
                </td>
                <td className="py-4  px-4 whitespace-nowrap">
                  {card.cardName}
                </td>
                <td className="whitespace-nowrap px-4">
                <Link to={`/credit-cards/${card.id}`}>
                  <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600  hover:text-white transition-all duration-[400ms]">View Details</button>
                </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export const CardListGrid = () => {

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-blue-400 bg-blue-100";
      case 2:
        return "text-pink-400 bg-pink-100";
        case 3:
        return "text-green-400 bg-green-100";
      default:
        return "text-yellow-400 bg-yellow-100";
    }
  };


  return (
    <div className="flex flex-col min-h-80 gap-4">
      {
        cardlist.map((card) => (
          <div key={card.id} className="bg-white flex items-center justify-between p-3 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${colorClass(card.id)} `}>
                {<card.icon size={20} />}
              </div>
              <div>
                <p>Card Type</p>
                <p className="text-slate-400 text-sm">{card.name}</p>
              </div>
            </div>
            <div className="">
              <p>Bank</p>
              <p className="text-slate-400 text-sm">{card.type}</p>
            </div>
            <div className="hidden xl:block">
              <p>Card Number</p>
              <p className="text-slate-400 text-sm">{card.cardNo}</p>
            </div>
            <div className="hidden xl:block">
              <p>Card Name</p>
              <p className="text-slate-400 text-sm">{card.cardName}</p>
            </div>
            <div>
            <Link to={`/credit-cards/${card.id}`}>
              <button className="text-blue-600 hover:scale-[1.08] transition-all duration-500">View Details</button>
            </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};