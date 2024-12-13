import { investment, myInvestment, stock } from "./constants/investment-consts"
import { MonthlyInvestmentChart, YearlyInvestmentChart } from "./DashboardCharts";


const Investments = () => {
  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-green-400 bg-green-100";
        case 2:
        return "text-pink-400 bg-pink-100";
      default:
        return "text-blue-400 bg-blue-100";
    }
  };

  const color = (id: number): string => {
    switch (id) {
      case 1:
        return "text-pink-500 bg-pink-100";
      case 2:
        return "text-blue-500 bg-blue-100";
      default:
        return "text-yellow-500 bg-yellow-100";
    }
  };


  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between w-full gap-8 overflow-x-auto no-scrollbar">
        {
          investment.map((item) => (
            <div key={item.id} className="flex items-center justify-center w-full gap-3 sm:gap-6 py-4 xl:px-8 px-2 bg-white rounded-2xl">
              <div>
                <p  className={`p-4 rounded-full ${colorClass(item.id)} `} >{<item.icon size={20} />}</p>
              </div>
              <div className="min-w-44">
                <p className="text-slate-400 ">{item.title}</p>
                <p className="font-semibold text-xl">{item.amount}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <YearlyInvestmentChart />
        </div>
        <div>
          <MonthlyInvestmentChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        <div className="xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-neutral-600 font-semibold text-lg mb-2">My Investment</h2>
            <div className="flex flex-col gap-4">
              {
                myInvestment.map((item) => (
                  <div key={item.id} className="bg-white flex items-center justify-between p-4 rounded-2xl">
                    <div className="flex w-60 items-center gap-4 ">
                      <div className={`p-3 rounded-lg ${color(item.id)} `}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p>{item.name}</p>
                        <p className="text-slate-400 text-sm">{item.title}</p>
                      </div>
                    </div>
                    <div className="w-28 hidden sm:block lg:hidden xl:block">
                      <p>{item.amount}</p>
                      <p className="text-slate-400 text-sm">Investment Value</p>
                    </div>
                    <div className="w-20">
                      <p className={`md:text-left text-right ${
                      item.value.startsWith('+') ? "text-green-600" : "text-red-600"
                    }`}>{item.value}</p>
                      <p className="text-slate-400 text-sm hidden md:block md:text-left">Return Value</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
        </div>

        <div className="flex flex-col ">
          <h2 className="text-neutral-600 font-semibold text-lg mb-2">Trending Stock</h2>
          <div className="bg-white rounded-2xl p-2 min-w-10 overflow-auto  h-[272px] ">
            <table className="w-full text-left">
              <thead className="text-slate-400  border-b">
                <tr>
                  <th className="px-4 min-w-20 py-2">SL No</th>
                  <th className="px-4 min-w-[105px]  py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4  py-2">Return</th>
                </tr>
              </thead>
              <tbody>
                {stock.map((item) => (
                  <tr
                    key={item.id}
                    className={`border-b last:border-b-0 ${item.id % 2 === 0 ? "bg-gray-100" : ""}`}
                  >
                    <td className="px-4 py-2 ">
                      {item.number}
                    </td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td
                      className={`px-4 py-2 font-medium ${
                        item.return.startsWith('+') ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.return}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investments