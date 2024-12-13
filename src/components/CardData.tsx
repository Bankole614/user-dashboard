import { FcSimCardChip } from "react-icons/fc";
import { Card } from "./constants/dashboard-consts";


const CardData = ({ card }: { card: Card }) => {
  const getGradientClass = (id: number): string => {
    switch (id) {
      case 1:
        return "bg-gradient-to-l from-blue-900 to-blue-500";
      case 2:
        return "bg-gradient-to-l from-rose-900 to-rose-500";
      case 3:
        return "bg-gradient-to-l from-teal-900 to-teal-500";
      default:
        return "bg-gradient-to-l from-orange-900 to-orange-500";
    }
  };

  return (
    <div
      key={card.id}
      className={`rounded-2xl w-[300px] pt-4 text-white  ${getGradientClass(
        card.id
      )} flex-shrink-0`}
    >
      <div className="flex justify-between px-4 items-center">
        <div className="flex flex-col">
          <p className="text-sm">Balance</p>
          <p className="text-lg">{card.balance}</p>
        </div>
        <FcSimCardChip className="w-10 h-10" />
      </div>
      <div className="flex my-4 px-4 items-center justify-between">
        <div className="">
          <p className="text-xs text-neutral-100">CARD HOLDER</p>
          <p className="">{card.cardholder}</p>
        </div>
        <div className="">
          <p className="text-xs text-neutral-100">VALID THRU</p>
          <p className="">{card.validity}</p>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-b-2xl bg-gray-300/20 px-4 py-2">
        <p className="">{card.number}</p>
        <div className="flex">
          <div className="h-10 w-10 bg-gray-200/50 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-200/50 rounded-full -ml-5"></div>
        </div>
      </div>
    </div>
  );
};

export default CardData