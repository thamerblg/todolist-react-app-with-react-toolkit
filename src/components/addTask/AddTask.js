import React, { useEffect, useState } from "react";
import "./AddTask.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  editTask,
  hideAlert,
  showAlert,
} from "../../features/task/taskSlice";

const AddTask = () => {
  const [descTask, setDescTask] = useState("");

  const isEditing = useSelector((state) => state.tasks.isEditing);
  const taskToEdit = useSelector((state) => state.tasks.taskToEdit);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      descTask === undefined ||
      descTask === "" ||
      descTask.trim().length === 0
    ) {
      setDescTask("");
      dispatch(showAlert({ type: "danger", msg: "Please enter value" }));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
    } else if (isEditing) {
      dispatch(editTask({ taskToEdit, descTask }));
      setDescTask("");
      dispatch(showAlert({ type: "info", msg: "Task edited" }));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
    } else {
      dispatch(showAlert({ type: "success", msg: "Task added to the list" }));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      const newTask = {
        id: Date.now(),
        description: descTask,
        isDone: false,
      };
      if (descTask.length > 0) {
        dispatch(addTask(newTask));
        setDescTask("");
      }
    }
  };

  useEffect(() => {
    taskToEdit && setDescTask(taskToEdit.description);
  }, [taskToEdit]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div id="input">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new Task..."
          value={descTask || ""}
          onChange={(e) => setDescTask(e.target.value)}
        />
        <button className="submit-btn">{isEditing ? "Edit" : "Submit"}</button>
      </div>
    </form>
  );
};

export default AddTask;
