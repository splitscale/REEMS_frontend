import { expenses } from "../../lib/Expense";
import Filter from "../Filter";
import SearchInput from "../Search";
import AddExpense from "./AddExpense";
import DeleteExpenseButton from "./DeleteExpense";
import EditExpenseButton from "./EditExpense";


export default function ExpenseListTable() {
  return (
    <>
      <div className="mt-5 font-serif text-center text-5xl fw-bold"> Expense </div>
      <div className="container-fluid">
        <div className="d-flex flex-column w-100 mx-2">
          <div className="d-flex justify-content-between align-items-center mt-5">
            <div className="ml-8">
              <AddExpense />
            </div>
            <div className="d-flex flex-grow-1 justify-content-end">
              {/* <Filter /> */}
              <div className="ml-4 mr-8">
                <SearchInput />
              </div>
            </div>
          </div>

          <table className="mx-8 flex-grow-1">
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
      <div />
    </>
  );
}
