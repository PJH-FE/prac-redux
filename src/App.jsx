import { useReducer, useState } from "react";
import "./App.css";
import { taskReducer } from "./taskReducer";

function App() {
  // 인풋값 저장 state
  const [todo, setTodo] = useState("");

  // todo list reducer
  const [todos, dispatch] = useReducer(taskReducer, []);

  const addEvent = () => {
    // 추가로직
    dispatch({
      type: "addTodo",
      todo: todo, // 인풋 벨류값 전달
      id: crypto.randomUUID(), // 랜덤 ID 부여
    });
  };
  const delEvent = (item) => {
    dispatch({
      type: "deleteTodo",
      id: item.id, // 선택한 Todo 의 ID전달
    });
  };

  const toggleEvent = (item) => {
    dispatch({
      type: "toggleTodo",
      id: item.id, // 선택한 Todo 의 ID전달
    });
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
