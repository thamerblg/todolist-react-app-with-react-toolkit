import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./task/Task";

const ListTask = () => {
  const [list, setList] = useState([]);
  const taskList = useSelector((state) => state.tasks.listOfTask);
  const taskFiltred = useSelector((state) => state.tasks.FiltredList);

  useEffect(() => {
    setList(taskFiltred);
  }, [taskFiltred]);

  useEffect(() => {
    setList(taskList);
  }, [taskList]);

  return (
    <div className="list-cards">
      {list.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ListTask;
