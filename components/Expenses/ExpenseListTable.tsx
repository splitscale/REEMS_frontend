import { expenses } from "../../lib/Expense";
import Filter from "../Filter";
import SearchInput from "../Search";
import AddExpense from "./AddExpense";
import DeleteExpenseButton from "./DeleteExpense";
import EditExpenseButton from "./EditExpense";


export default function ExpenseListTable() {
  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Expense </div><div className="container">

        <div className="container mt-5 d-flex justify-content-between align-items-center">
          <AddExpense />
          <Filter />
          <SearchInput />
        </div>

        <div className="container">
          <table className="mx-auto">
            <thead className="text-center bg-gradient-to-b from-red-500 to-red-900 text-white">
              <tr>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Environment
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Expenses
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Importance
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-900">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="border border-black">{expense.id}</td>
                  <td className="border border-black">{expense.environment}</td>
                  <td className="border border-black">{expense.expenses}</td>
                  <td className="border border-black">{expense.description}</td>
                  <td className="border border-black">{expense.importance}</td>
                  <td className="border border-black text-center">
                    <EditExpenseButton />
                    <DeleteExpenseButton />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
