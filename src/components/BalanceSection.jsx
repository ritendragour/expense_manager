import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { saveTransactions } from "../context/GLobalAction";
import { toast } from "react-toastify";


const BalanceSection = () => {

  const { transactions, dispatch } = useContext(GlobalContext)

  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")

  const total = transactions.reduce((p, c) => {
    return p + c.amount
  }, 0)


  const handleSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: crypto.randomUUID(),
      text: text,
      amount: parseInt(amount)
    }

    const data = saveTransactions(newTransaction)

    dispatch({
      type: "SAVE",
      payload: data
    })
    if (data.text && data.amount) {
      toast.success("Save Money", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
    setAmount("")
    setText("")
  }
  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{total}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input value={text} type="text" placeholder="Enter Your Transaction" onChange={(e) => setText(e.target.value)} required />
       
        {/* <div className="radioButton">
        <label>Income</label>
        <input type="radio" value="income" />
        <label>Expence</label>
        <input type="radio" value="expence" />
        </div> */}
        <input value={amount} type="number" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} required />
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
        <div className="w-100">
        <p className="notess">You want to subtract transactions. so please use the minus sign (-)</p>
        </div>
      </form>
    </div>
  );
};

export default BalanceSection;
