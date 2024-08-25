import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/slice/todoSlice";

function App() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const addEvent = () => {
    dispatch(addTodo(todo));
  };
  const delEvent = (item) => {
    dispatch(deleteTodo(item));
  };
  const toggleEvent = (item) => {
    dispatch(toggleTodo(item));
  };

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />
      <button
        onClick={() => {
          addEvent(todo);
        }}
      >
        추가
      </button>

      <ul>
        {todos.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                textDecoration: item.isDone ? "line-through" : "none",
              }}
            >
              <span
                onClick={() => {
                  toggleEvent(item);
                }}
              >
                {item.todo}
              </span>

              <button
                onClick={() => {
                  delEvent(item);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
