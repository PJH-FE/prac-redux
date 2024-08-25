import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        todo: action.payload,
        id: crypto.randomUUID(),
        isDone: false,
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {
      return (state = state.filter((item) => {
        return item.id !== action.payload.id;
      }));
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => {
        return item.id === action.payload.id;
      });
      todo.isDone = !todo.isDone;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
