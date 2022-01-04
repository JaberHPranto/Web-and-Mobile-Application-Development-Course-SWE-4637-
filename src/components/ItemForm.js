import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { v4 as uid } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const ItemForm = ({
  timerTitle,
  timerProject,
  timerId,
  editable,
  toggleEdit,
  toggleAdd,
}) => {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");

  const { addTimer, editTimer } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, project);

    if (editable) {
      const updatedTitle = title !== "" ? title : timerTitle;
      const updatedProject = project !== "" ? project : timerProject;
      editTimer({ title: updatedTitle, project: updatedProject, id: timerId });
      toggleEdit();
    } else {
      const newTimer = {
        id: uid(),
        title,
        project,
      };

      addTimer(newTimer);
      toggleAdd();
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setProject("");
  };

  const handleCancel = () => {
    editable ? toggleEdit() : toggleAdd();
  };

  return (
    <div className="timer-form">
      <form onSubmit={handleSubmit}>
        <div className="timer-form-data">
          <label>Title</label>
          <input
            type="text"
            name="title"
            defaultValue={timerTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Project</label>
          <input
            type="text"
            name="project"
            defaultValue={timerProject}
            onChange={(e) => setProject(e.target.value)}
          />
        </div>
        <div className="form-btn">
          <Button type="submit" variant="outlined">
            {editable ? "Update" : "Create"}
          </Button>
          <Button variant="outlined" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
