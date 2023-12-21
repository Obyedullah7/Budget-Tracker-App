import React from 'react'

const ExpenseData = [
    {
        id: 1,
        description: "Rent",
        value: -11999.99
    },
    {
        id: 2,
        description: "Groceries",
        value: -35000.00
    },
    {
        id: 3,
        description: "Internet",
        value: -10000.00
    }
]

const ExpenseList = () => {
  return (
    <div>
    <h2 className="border-b pb-2 font-medium text-red-600">Expenses</h2>
    
    <ul id="expense-list" className="divide-y">
        {ExpenseData.map((expense) => (
            <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
            
              <span>
                {expense.description}
              </span>
              <div>
                <span className="text-red-600">{expense.value}</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>
        ))}
    </ul>
    </div>
  )
}

export default ExpenseList;