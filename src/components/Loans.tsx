import { activeLoan, loan } from "./constants/loans-const"

const Loans = () => {

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


  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between w-full gap-8 overflow-x-auto no-scrollbar">
        {
          loan.map((loan) => (
            <div key={loan.id} className="flex items-center justify-center w-full gap-4 p-4 bg-white rounded-2xl">
              <div>
                <p  className={`p-4 rounded-full ${colorClass(loan.id)} `} >{<loan.icon size={24} />}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm min-w-32 lg:text-base">{loan.title}</p>
                <p className="font-semibold xl:text-xl">{loan.amount}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className="flex flex-col ">
          <h2 className="text-neutral-600 font-semibold text-lg mb-2">Active Loans Overview</h2>
          <div className="bg-white rounded-2xl p-2 min-w-10 overflow-x-auto ">
            <table className="w-full text-left">
              <thead className="text-slate-400  border-b">
                <tr>
                  <th className="px-4 min-w-20 py-2">SL No</th>
                  <th className="px-4 min-w-32 py-2">Loan Money</th>
                  <th className="px-4 min-w-36 py-2">Left to Repay</th>
                  <th className="px-4  py-2">Duration</th>
                  <th className="px-4 min-w-36 py-2">Interest Rate</th>
                  <th className="px-4 py-2">Installments</th>
                  <th className="px-4  py-2">Repay</th>
                </tr>
              </thead>
              <tbody>
                {activeLoan.map((loan) => (
                  <tr
                    key={loan.id}
                    className={`border-b last:border-b-0 ${loan.id % 2 === 0 ? "bg-gray-50" : ""}`}
                  >
                    <td className="px-4 py-2">
                      {loan.number}
                    </td>
                    <td className="px-4 py-2">{loan.loan}</td>
                    <td className="px-4 py-2">{loan.repay}</td>
                    <td className='px-4 py-2'>{loan.duration}</td>
                    <td className="px-4 py-2">{loan.interest}</td>
                    <td className="px-4 min-w-36 py-2">{loan.installment} / month</td>
                    <td className='px-4 py-2'>
                      <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                      Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Loans