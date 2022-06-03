import React from "react";
import "./Task.css";
import { FaCheck, FaTrash, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  hideAlert,
  setEditTask,
  showAlert,
  toggleCompleteTask,
} from "../../features/task/taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
    dispatch(showAlert({ type: "warning", msg: "task has been deleted" }));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  const handleToggleTask = (id) => {
    dispatch(toggleCompleteTask(id));
  };

  const handleSetEditTask = (task) => {
    dispatch(setEditTask(task));
    dispatch(showAlert({ type: "dark", msg: "task set to edit" }));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
  return (
    <div className={`cards ${task.isDone ? "resolved" : ""}`}>
      <button
        className={`resolved-btn ${task.isDone ? "active" : ""} `}
        onClick={() => handleToggleTask(task.id)}
      >
        {task.isDone && <FaCheck size={15} />}
      </button>
      <div className="cards-info">
        <h3 className="task">{task.description}</h3>
      </div>
      <button
        className="btn delete-btn"
        onClick={() => handleDeleteTask(task.id)}
      >
        <FaTrash size={14} />
      </button>
      <button className="btn edit-btn" onClick={() => handleSetEditTask(task)}>
        <FaPen size={14} />
      </button>
    </div>
  );
};

export default Task;
