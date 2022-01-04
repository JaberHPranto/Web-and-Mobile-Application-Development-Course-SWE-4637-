import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import ItemForm from "./ItemForm";

function ItemList() {
  const [addForm, setAddForm] = useState(false);
  const timers = [
    {
      title: "Practice squat",
      project: "Gym Chores",
      id: 1,
    },
    {
      title: "Bake squash",
      project: "Kitchen Chores",
      id: 2,
    },
  ];

  const handleAdd = () => {
    setAddForm(!addForm);
  };

  return (
    <div className="timer-list">
      {timers.map((timer) => (
        <div key={timer.id} className="timer-item">
          <h1>{timer.title}</h1>
          <p>{timer.project}</p>
          <div className="timer-icons">
            <EditIcon onClick={() => console.log(timer.id)} />
            <DeleteIcon />
          </div>
        </div>
      ))}
      <AddIcon onClick={handleAdd} />
      {addForm && <ItemForm />}
    </div>
  );
}

export default ItemList;
