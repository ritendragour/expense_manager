import React, { useContext } from "react";
import ListItem from "./ListItem";
import GlobalContext from "../context/GlobalContext";

const ListGroup = () => {

  const {transactions} = useContext(GlobalContext)

  return (
    <ul className="list-group">
      {
transactions.length === 0?<h1 className="text-dark bg-warning border border-secondary p-3">No transaction</h1>:transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction}/> )


}
    </ul>
  );
};

export default ListGroup;
