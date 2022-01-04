import AddIcon from "@mui/icons-material/Add";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";

function ItemList() {
  const [addForm, setAddForm] = useState(false);
  const { timers } = useContext(GlobalContext);

  const handleAdd = () => {
    setAddForm(!addForm);
  };

  return (
    <div className="timer-list">
      {timers.map((timer) => (
        <div key={timer.id} className="timer-item">
          <ItemCard title={timer.title} project={timer.project} id={timer.id} />
        </div>
      ))}
      <AddIcon onClick={handleAdd} />
      {addForm && <ItemForm toggleAdd={handleAdd} />}
    </div>
  );
}

export default ItemList;
