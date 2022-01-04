import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { v4 as uid } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const ItemForm = () => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");

  const { addTimer } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, project);
    const newTimer = {
      id: uid(),
      title,
      project,
    };

    addTimer(newTimer);
  };

  return (
    <div className="timer-form">
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Project
          <input
            type="text"
            name="project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </label>
        <div>
          <Button type="submit">Create</Button>
          <Button>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
