import React from 'react'


const AddTransaction = ({ Money, Label, setMoney, setLabel, Transactions, setTransactions }) => {
    // Submit Handler Function
    const submitHandler = (e) => {
        e.preventDefault();
        setTransactions([
            ...Transactions,
            {
                label: Label,
                money: Money,
                id: Math.random() * 10
            }
        ])
        setLabel("");
        setMoney("");
    }
    // Label Handler function
    const labelHandler = (l) => {
        setLabel(l.target.value);
    }
    // Amount Handler function
    const amountHandler = (a) => {
        setMoney(a.target.value);
    }
    // 
    return (
        <>
            <div className="col-12 p-4">
                <h3>Add new Transaction</h3>
                <hr />
                <form onSubmit={submitHandler}>
                    <label>Label</label>
                    <input onChange={labelHandler} value={Label} className="form-control" type="text" placeholder="Enter Label..." />
                    <label>Amount</label> <br />
                    <label>neagtive - expense , positive-income</label>
                    <input onChange={amountHandler} value={Money} className="form-control" type="number" placeholder="Enter Amount..." />
                    <button type="submit" className="mybtn mx-auto">Add Transaction</button>
                </form>
            </div>
        </>
    )
}


export default AddTransaction;