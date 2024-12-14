import React, { useState } from "react";
import { transaction } from "./constants/dashboard-consts"



const TransactionsTable: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter transactions based on the current filter
  const filteredTransactions = transaction.filter((transaction) => {
    if (filter === "income") return transaction.amount.startsWith('+');
    if (filter === "expense") return transaction.amount.startsWith('-');
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = filteredTransactions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const colorClass = (id: number): string => {
    switch (id) {
      case 1:
        return "text-yellow-500 bg-yellow-100";
      case 2:
        return "text-blue-500 bg-blue-100";
      case 3:
        return "text-red-500 bg-red-100";
      case 4:
        return "text-green-400 bg-green-100";
      case 5:
        return "text-pink-400 bg-pink-100";
      default:
        return "text-rose-400 bg-rose-100";
    }
  };

  return (
    <div className=" mx-auto">
      <h2 className="text-neutral-600  text-lg font-semibold mb-2">Recent Transactions</h2>

      
      <div className="flex gap-4 border-b mb-4">
        <button
          onClick={() => {
            setFilter("all");
            setCurrentPage(1);
          }}
          className={` px-2 py-1 transition-all duration-300 font-medium ${
            filter === "all"
              ? "text-blue-600 border-b-[3px] border-blue-600 "
              : "text-slate-400  hover:text-blue-600"
          }`}
        >
          All Transactions
        </button>
        <button
          onClick={() => {
            setFilter("income");
            setCurrentPage(1);
          }}
          className={`px-2 py-1 transition-all duration-300 font-medium ${
            filter === "income"
              ? "text-blue-600 border-b-[3px] border-blue-600"
              : "text-slate-400  hover:text-blue-600"
          }`}
        >
          Income
        </button>
        <button
          onClick={() => {
            setFilter("expense");
            setCurrentPage(1);
          }}
          className={`px-2 py-1 transition-all duration-300 font-medium ${
            filter === "expense"
              ? "text-blue-600 border-b-[3px] border-blue-600 "
              : "text-slate-400  hover:text-blue-600"
          }`}
        >
          Expense
        </button>
      </div>

      {/* Transactions Table */}
      <div className="bg-white min-w-10 overflow-x-auto rounded-2xl p-4">
        <table className="w-full text-left">
          <thead className="text-slate-400 border-b">
            <tr>
              <th className="px-4 py-2">Description</th>
              <th className="px-4  py-2">Transaction ID</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4  py-2">Card</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className={`border-b last:border-b-0 ${transaction.id % 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <td className="px-4 py-2 flex min-w-60 items-center gap-2">
                  <span className={`p-2 rounded-full ${colorClass(transaction.id)} `}><transaction.icon size={22} /></span>
                  {transaction.title}
                </td>
                <td className="px-4 min-w-36 py-2">{transaction.transactionId}</td>
                <td className="px-4 py-2">{transaction.type}</td>
                <td className="px-4 min-w-44 py-2">{transaction.cardNo}</td>
                <td className="px-4 min-w-44 py-2">{transaction.date}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    transaction.amount.startsWith('+') ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount.startsWith('+') ? `${transaction.amount}` : transaction.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 text-gray-600 border border-slate-400 rounded disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-gray-600 border border-slate-400 rounded disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;