import React from 'react'
import AddTransaction from './AddTransaction';
import Balance from './Balance';


const LeftDiv = ({ Money, Label, setMoney, setLabel, Transactions, setTransactions }) => {
    // Sum of all Trasactions 
    const balance = Transactions.reduce((accumulator, currentValue) => {
        return accumulator += parseInt(currentValue.money);
    }, 0);
    const amounts = Transactions.map((transaction) => transaction.money);
    // Income adder Function
    var income = amounts.filter(item => item > 0).reduce((accumulator, item) => {
        return accumulator += parseInt(item);
    }, 0);
    // Expense adder Function
    var expense = amounts.filter(item => item < 0).reduce((accumulator, item) => {
        return accumulator += parseInt(item)
    }, 0);
    // Return
    return (
        <>
            <div className="left col-sm">
                <h3>Your Balance</h3>
                <h1 className="text-primary">₹ {balance}</h1>
                <Balance
                    Transactions={Transactions}
                    income={income}
                    expense={expense}
                />
                {/* Form Component */}
                <AddTransaction
                    Money={Money}
                    Label={Label}
                    setMoney={setMoney}
                    setLabel={setLabel}
                    Transactions={Transactions}
                    setTransactions={setTransactions}
                />
            </div>
        </>
    )
}

export default LeftDiv;