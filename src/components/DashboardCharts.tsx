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
      <div className="w-full h-80 bg-white sm:p-4 p-2 rounded-2xl">
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
      <div className="w-full  h-80 bg-white p-4 rounded-2xl flex justify-center items-center">
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
      <div className="w-full h-72 bg-white rounded-2xl p-4">
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


export const DebitCreditOverview = () => {
  const data = [
    { name: 'Sat', Debit: 400, Credit: 240 },
    { name: 'Sun', Debit: 300, Credit: 550 },
    { name: 'Mon', Debit: 200, Credit: 98 },
    { name: 'Tue', Debit: 500, Credit: 390 },
    { name: 'Wed', Debit: 300, Credit: 500 },
    { name: 'Thu', Debit: 400, Credit: 240 },
    { name: 'Fri', Debit: 350, Credit: 200 },
  ];

  return (
    <div className=''>
      <h2 className="text-neutral-600 text- text-lg font-semibold mb-2">Debit and Credit Overview</h2>
      <div className="w-full h-80 bg-white p-4 rounded-2xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}  barGap={10} margin={{right: 20}}>
            <CartesianGrid strokeDasharray="0" stroke='#e5e7eb' vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend verticalAlign='top' align='right' wrapperStyle={{paddingBottom: '20px', fontSize: '15px', maxWidth: '100%'}} iconType='circle' iconSize={10} />
            <Bar dataKey="Debit" fill="#1d4ed8" barSize={25}  radius={[5, 5, 5, 5]} />
            <Bar dataKey="Credit" fill="#ca8a04" barSize={25}  radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};





export const ExpenseChart = () => {
  
  const data = [
    { name: 'Aug', value: 6000 },
    { name: 'Sep', value: 10000 },
    { name: 'Oct', value: 8000 },
    { name: 'Nov', value: 6000 },
    { name: 'Dec', value: 12500 }, 
    { name: 'Jan', value: 8500 },
  ];

  return (
    <div className=''>
      <h2 className="text-neutral-600 text- text-lg font-semibold mb-2">My Expense</h2>
      <div className="w-full h-48 bg-white px-2 rounded-2xl">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis hide />
        <Tooltip />
        <Bar dataKey="value" fill="#00C9A7" radius={[10, 10, 0, 0]} />
      </BarChart>
        </ResponsiveContainer>
      </div>
    
    </div>
      
  );
};



export const YearlyInvestmentChart = () => {

  const data = [
    { year: "2019", value: 10000 },
    { year: "2020", value: 25000 },
    { year: "2021", value: 15000 },
    { year: "2022", value: 35000 },
    { year: "2023", value: 7000 },
    { year: "2024", value: 30000 },
  ];


  return (
    <div>
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Yearly Total Investment</h2>
      <div className="w-full h-72 bg-white rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{right: 20}}>
          <CartesianGrid strokeDasharray="3 3" stroke='#e5e7eb' vertical={false} />
          <XAxis dataKey="year" tick={{ fill: "#A0AEC0" }} axisLine={false} />
          <YAxis tick={{ fill: "#A0AEC0" }} axisLine={false} tickFormatter={(value) => `$${value / 100}k`} />
          <Tooltip contentStyle={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
          }} 
          labelStyle={{color: '#374151'}}
          formatter={(value: number) => `$${value.toLocaleString()}`}
           />
          <Line
            type="linear"
            dataKey="value"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{r: 6, fill: '#f59e0b', strokeWidth: 2, stroke: '#fff'}}
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
    
  );
};

export const MonthlyInvestmentChart = () => {

  const data = [
    { name: "Jul", value: 10000 },
    { name: "Aug", value: 1000 },
    { name: "Sep", value: 15000 },
    { name: "Oct", value: 38000 },
    { name: "Nov", value: 20000 },
    { name: "Dec", value: 30000 },
    { name: "Jan", value: 15000 },
  ];


  return (
    <div>
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Monthly Revenue</h2>
      <div className="w-full h-72 bg-white rounded-2xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{right: 20}}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke='#e5e7eb' vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "#A0AEC0" }} axisLine={false} />
          <YAxis tick={{ fill: "#A0AEC0" }} axisLine={false} tickFormatter={(value) => `$${value / 100}k`} />
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


export const CardExpenseChart = () => {

  const data = [
    { name: "DBL Bank", value: 25, color: "#4a90e2" }, 
    { name: "ABM Bank", value: 25, color: "#50e3c2" },  
    { name: "BRC Bank", value: 25, color: "#f8a2c2" },    
    { name: "MCP Bank", value: 25, color: "#f5c64c" },        
  ];


  return (
    <div>
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Expense Statisics</h2>
      <div className="w-full  h-80 bg-white p-4 rounded-2xl flex justify-center items-center">
        <ResponsiveContainer>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              fill='#8884d8'
              innerRadius={50}
              outerRadius={100}
              label={(entry) => `${entry.value}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend wrapperStyle={{ fontSize: '15px', maxWidth: '100%'}} iconType='circle' iconSize={10} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    
  );
};



