import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from 'recharts';



import { PieChart, Pie, Cell } from "recharts";

export const DashboardBarChart = () => {
  const data = [
    { name: 'Sat', Deposit: 400, Withdraw: 240 },
    { name: 'Sun', Deposit: 300, Withdraw: 139 },
    { name: 'Mon', Deposit: 200, Withdraw: 98 },
    { name: 'Tue', Deposit: 500, Withdraw: 390 },
    { name: 'Wed', Deposit: 100, Withdraw: 50 },
    { name: 'Thu', Deposit: 400, Withdraw: 240 },
    { name: 'Fri', Deposit: 350, Withdraw: 200 },
  ];

  return (
    <div className=''>
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Weekly Activity</h2>
      <div className="w-full h-96 bg-white p-4 rounded-xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}  barGap={10} margin={{right: 20}}>
            <CartesianGrid strokeDasharray="0" stroke='#e5e7eb' vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend verticalAlign='top' align='right' wrapperStyle={{paddingBottom: '20px', fontSize: '15px', maxWidth: '100%'}} iconType='circle' iconSize={10} />
            <Bar dataKey="Deposit" fill="#38bdf8" barSize={20}  radius={[10, 10, 10, 10]} />
            <Bar dataKey="Withdraw" fill="#f87171" barSize={20}  radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};




export const DashboardPieChart = () => {

  const data = [
    { name: "Entertainment", value: 30, color: "#3A436D" }, 
    { name: "Bill Expense", value: 15, color: "#FFA500" },  
    { name: "Investment", value: 20, color: "#FF00FF" },    
    { name: "Others", value: 35, color: "#0000FF" },        
  ];


  return (
    <div>
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Expense Statisics</h2>
      <div className="w-full  h-96 bg-white p-4 rounded-xl flex justify-center items-center">
        <ResponsiveContainer>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={(entry) => `${entry.value}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '15px', maxWidth: '100%'}} iconType='circle' iconSize={10} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    
  );
};





export const BalanceHistoryChart = () => {

  const data = [
    { name: "Jul", value: 200 },
    { name: "Aug", value: 400 },
    { name: "Sep", value: 300 },
    { name: "Oct", value: 800 },
    { name: "Nov", value: 400 },
    { name: "Dec", value: 300 },
    { name: "Jan", value: 600 },
  ];


  return (
    <div>
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Balance History</h2>
      <div className="w-full h-72 bg-white rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{right: 20}}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke='#e5e7eb' />
          <XAxis dataKey="name" tick={{ fill: "#A0AEC0" }} axisLine={false} />
          <YAxis tick={{ fill: "#A0AEC0" }} axisLine={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#colorFill)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4A90E2"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
    
  );
};



