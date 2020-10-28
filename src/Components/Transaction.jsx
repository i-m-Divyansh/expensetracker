import React from 'react'


const Transaction = ({ label, amount, Transactions, setTransactions, transactionId }) => {
    var amt = Boolean(amount > 0);
    var sign = Boolean(amount > 0);
    // delete transactoin handler
    const deleteHandler = () => {
        setTransactions(Transactions.filter((t) => t.id !== transactionId));
    }
    // Return
    return (
        <>
            <li className="shadow">
                <button onClick={deleteHandler} className="delete-btn">x</button>
                <span>{label}</span>
                <span style={{ color: amt ? "green" : "red" }}>{sign ? "+" : ""}{amount}</span>
            </li>
        </>
    )
}

export default Transaction;