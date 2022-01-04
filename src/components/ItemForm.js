import { Button } from "@mui/material";
import React, { useState } from "react";
// import { v4 as uid } from "uuid";

const ItemForm = () => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, project);
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
