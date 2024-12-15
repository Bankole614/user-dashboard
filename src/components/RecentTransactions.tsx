import { transaction } from "./constants/dashboard-consts"


const RecentTransactions = () => {

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-yellow-500 bg-yellow-100";
      case 2:
        return "text-blue-500 bg-blue-100";
      default:
        return "text-green-500 bg-green-100";
    }
  };


  return (
    <div className="flex flex-col w-full ">
      <h2 className="text-neutral-600 font-semibold mb-2">Recent Transactions</h2>
      <div className="flex flex-col min-w-72 gap-3 bg-white h-48 rounded-2xl px-4 justify-center">
        {transaction.slice(0, 3).map((item) => (
          <div key={item.id} className='flex  items-center justify-between gap-2 '>
            <div className="flex items-center gap-2">
              <span className={`p-3 rounded-full ${colorClass(item.id)} `}>{<item.icon size={22} />}</span>
              <div className="flex flex-col">
                <p className="text-[15px]">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.date}</p>
              </div>
            </div>
            
            <p className={`${item.type === 'Transfer' ? 'text-green-500' : 'text-red-500'}`}>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions