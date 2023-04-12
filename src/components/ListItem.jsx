import { useContext } from 'react'
import {FaTrash} from 'react-icons/fa'
import GlobalContext from '../context/GlobalContext'
import { DeleteTransactions } from '../context/GLobalAction'
import { toast } from 'react-toastify'

const ListItem = ({transaction}) => {

  const {dispatch} = useContext(GlobalContext)
const handleDelete = (id) =>{
  const data = DeleteTransactions(id)

  dispatch({
    type : "DELETE",
    payload : data
  })

  toast.error("DELETE",{
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    })

}
  return (
    <li className="list-item">
    <span>
      <h3 className={transaction.amount > 0 ? "income-transaction":"expense-transaction"}>₹{transaction.amount}</h3>
      <h4>{transaction.text}</h4>
    </span>
    <button className="delbtn" onClick={()=>handleDelete(transaction.id)}><FaTrash/></button>
  </li>
  )
}

export default ListItem
