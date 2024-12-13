import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Accounts from "./components/Accounts";
import CreditCards from "./components/CreditCards";
import { cards } from "./components/constants/dashboard-consts";
import Investments from "./components/Investments";
import Loans from "./components/Loans";
import CardDetails from "./components/CardDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard cards={cards} />} />
          <Route path="/transactions" element={<Transactions cards={cards} />} />
          <Route path="/accounts" element={<Accounts cards={cards} />} />
          <Route path="/credit-cards" element={<CreditCards cards={cards} />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/credit-cards/:id" element={<CardDetails  />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
