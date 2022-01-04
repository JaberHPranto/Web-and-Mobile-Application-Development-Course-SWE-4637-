import AddIcon from "@mui/icons-material/Add";
import { Divider } from "@mui/material";
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
    <>
      <h1 className="timer-heading">Timers</h1>
      <Divider />
      <div className="timer-list">
        {timers.map((timer) => (
          <div key={timer.id} className="timer-item">
            <ItemCard
              title={timer.title}
              project={timer.project}
              id={timer.id}
            />
          </div>
        ))}
        <AddIcon className="add-icon" onClick={handleAdd} />
        {addForm && <ItemForm toggleAdd={handleAdd} />}
      </div>
    </>
  );
}

export default ItemList;
