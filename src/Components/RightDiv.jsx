import React from 'react'
import "../RightDiv.css"
import Transaction from './Transaction'

const RightDiv = ({ Transactions, setTransactions }) => {
    // Fetching all transaction Function
    const fetch = Transactions.map((d) => <Transaction
        Transactions={Transactions}
        setTransactions={setTransactions}
        transactionId={d.id}
        key={d.id}
        label={d.label}
        amount={d.money}
    />)
    // Return
    return (
        <React.Fragment>
            <div className="right col-sm">
                <h3>History</h3>
                <hr />
                <ul id="list" className="list">
                    {fetch}
                </ul>
            </div>
        </React.Fragment >
    )
}

export default RightDiv;