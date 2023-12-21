import React from 'react'


const IncomeData = [
    {
        id: 1,
        description: "Website project",
        value: 11999.99
    },
    {
        id: 2,
        description: "Salary",
        value: 35000.00
    },
    {
        id: 3,
        description: "Mobile app project",
        value: 10000.00
    }
]



const IncomeList = () => {
  return (
    <div>
    <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>
    
    <ul id="income-list" className="divide-y">
        {IncomeData.map((income) => (
            <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
            
              <span>
                {income.description}
              </span>
              <div>
                <span className="text-green-600">{income.value}</span>
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

export default IncomeList;