import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "todos",
  initialState: {
    listOfTask: [
      { id: 1, description: "learn html", isDone: true },
      { id: 2, description: "learn css", isDone: true },
      { id: 3, description: "learn reactJs", isDone: false },
      { id: 4, description: "learn nodeJS", isDone: false },
    ],
    isEditing: false,
    taskToEdit: [],
    FiltredList: [],
    alertBlock: { show: false, type: "", msg: "" },
  },

  reducers: {
    addTask: (state, action) => {
      state.listOfTask = [
        ...state.listOfTask,
        {
          id: action.payload.id,
          description: action.payload.description,
          isDone: false,
        },
      ];
    },
    deleteTask: (state, action) => {
      state.listOfTask = [...state.listOfTask].filter(
        (task) => task.id !== action.payload
      );
    },
    toggleCompleteTask: (state, action) => {
      state.listOfTask = [...state.listOfTask].map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    },
    setEditTask: (state, action) => {
      state.isEditing = true;
      state.taskToEdit = action.payload;
    },
    editTask: (state, action) => {
      state.listOfTask = state.listOfTask.map((task) =>
        task.id === action.payload.taskToEdit.id
          ? { ...task, description: action.payload.descTask }
          : task
      );
      state.isEditing = false;
      state.taskToEdit = [];
    },
    deleteAllTasks: (state) => {
      state.listOfTask = [];
    },
    FilterTasks: (state, action) => {
      state.FiltredList =
        action.payload === "completed"
          ? state.listOfTask.filter((task) => task.isDone)
          : action.payload === "uncompleted"
          ? state.listOfTask.filter((task) => !task.isDone)
          : state.listOfTask;
    },
    showAlert: (state, action) => {
      state.alertBlock = {
        show: true,
        type: action.payload.type,
        msg: action.payload.msg,
      };
    },
    hideAlert: (state, action) => {
      state.alertBlock = { show: false, type: "", msg: "" };
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompleteTask,
  setEditTask,
  editTask,
  deleteAllTasks,
  FilterTasks,
  showAlert,
  hideAlert,
} = taskSlice.actions;

export default taskSlice.reducer;
