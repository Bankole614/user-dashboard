import { transaction } from "./constants/dashboard-consts"


const RecentTransactions = () => {

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-yellow-500 bg-yellow-200";
      case 2:
        return "text-blue-500 bg-blue-200";
      default:
        return "text-green-500 bg-green-200";
    }
  };


  return (
    <div className="flex flex-col w-full ">
      <h2 className="text-neutral-600 font-semibold mb-2">Recent Transactions</h2>
      <div className="flex flex-col min-w-72 gap-3 bg-white h-48 rounded-xl px-4 justify-center">
        {transaction.map((item) => (
          <div key={item.id} className='flex  items-center justify-between gap-4 '>
            <span className={`p-3 rounded-full ${colorClass(item.id)} `}>{item.icon}</span>
            <div className="flex flex-col ">
              <p >{item.title}</p>
              <p className="text-slate-400 text-sm">{item.date}</p>
            </div>
            <p className={`${item.id % 3 === 1 ? 'text-red-400' : 'text-green-400'}`}>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions