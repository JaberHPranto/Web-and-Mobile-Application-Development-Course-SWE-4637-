import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import ItemForm from "./ItemForm";

function ItemCard({ title, project, id }) {
  const { deleteTimer } = useContext(GlobalContext);
  const [edit, setEdit] = useState(false);
  const handleDelete = (id) => {
    deleteTimer(id);
  };

  const handleEdit = (id) => {
    console.log(id);
    setEdit(!edit);
  };

  const toggleEdit = () => {
    setEdit(false);
  };

  return (
    <>
      {!edit ? (
        <div>
          <h2 className="ic-title">{title}</h2>
          <p className="ic-project">{project}</p>
          <div className="timer-icons">
            <EditIcon onClick={() => handleEdit(id)} />
            <DeleteIcon onClick={() => handleDelete(id)} />
          </div>
        </div>
      ) : (
        <>
          <ItemForm
            timerTitle={title}
            timerProject={project}
            timerId={id}
            editable
            toggleEdit={toggleEdit}
          />
        </>
      )}
    </>
  );
}

export default ItemCard;
