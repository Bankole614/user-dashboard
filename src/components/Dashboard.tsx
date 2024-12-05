
import DashboardCards from "./DashboardCards";
import { DashboardBarChart, DashboardPieChart, BalanceHistoryChart } from "./DashboardCharts";
import QuickTransfer from "./QuickTransfer";
import RecentTransactions from "./RecentTransactions";
import { Card } from "./constants/dashboard-consts";

interface CardProps {
  cards: Card[];
}

const Dashboard: React.FC<CardProps> = ({ cards }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
      <div className="flex justify-between overflow-x-auto no-scrollbar gap-4">
        <DashboardCards cards={cards} />
        <RecentTransactions />
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 grid-cols-1  mb-4">
        <div className="lg:col-span-2">
          <DashboardBarChart />
        </div>
        <div>
          <DashboardPieChart />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center gap-4 grid-cols-1  mb-4">
        <div>
          <QuickTransfer />
        </div>
        <div className="lg:col-span-2">
          <BalanceHistoryChart />
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Dashboard;
