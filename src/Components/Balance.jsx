import React from 'react'

const Balance = ({ Transactions, income, expense }) => {
    // Return 
    return (
        <>
            {/* Income Expenditure Div */}
            <div className="Inc_exp_div shadow row p-3">
                <div className="income-div col-6">
                    <h3>Income</h3>
                    <p className="text-success">{income}</p>
                </div>
                <div className="expense-div col-6">
                    <h3>Expense</h3>
                    <p className="text-danger">{expense}</p>
                </div>
            </div>
        </>
    )
}

export default Balance;