import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push({
        id: v4(),
        title: action.payload,
        complete: false,
      });
    },
    toggleToDo: (state, action) => {
      return state.map((t) =>
        t.id === action.payload ? { ...t, complete: !t.complete } : t
      );
    },
    deleteToDo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    editToDo: (state, action) => {
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, title: action.payload.title } : t
      );
    },
  },
});

export const { addToDo, toggleToDo, deleteToDo, editToDo } = todoSlice.actions;

export default todoSlice.reducer;
