import React from "react";
import "./Filter.css";
import { useDispatch } from "react-redux";
import { FilterTasks } from "../../features/task/taskSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterTasks = (e) => {
    dispatch(FilterTasks(e.target.value));
  };
  return (
    <footer>
      <div className="menu-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="all"
            defaultChecked
            onClick={handleFilterTasks}
          />
          <label className="form-check-label">All</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="completed"
            onClick={handleFilterTasks}
          />
          <label className="form-check-label">Completed</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="uncompleted"
            onClick={handleFilterTasks}
          />
          <label className="form-check-label">Uncompleted</label>
        </div>
      </div>
    </footer>
  );
};

export default Filter;
