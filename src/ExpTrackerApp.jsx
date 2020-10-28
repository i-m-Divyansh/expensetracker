import React, { useState } from 'react';
import LeftDiv from './Components/LeftDiv'
import RightDiv from './Components/RightDiv';
import './index.css';

const ExpTrackerApp = () => {
    // Hooks
    const [Label, setLabel] = useState("");
    const [Money, setMoney] = useState("");
    const [Transactions, setTransactions] = useState([]);
    // Return
    return (
        <>
            <h3 className="text-center mb-5">Expense Tracker</h3>
            <div className=" main-div text-center row">
                <LeftDiv
                    Label={Label}
                    Money={Money}
                    setLabel={setLabel}
                    setMoney={setMoney}
                    Transactions={Transactions}
                    setTransactions={setTransactions}
                />
                <RightDiv
                    Transactions={Transactions}
                    setTransactions={setTransactions}
                />
            </div>
        </>
    )
}

export default ExpTrackerApp;