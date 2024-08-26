export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "addTodo": {
      return [
        ...tasks,
        {
          todo: action.todo,
          id: action.id,
          isDone: false,
        },
      ];
    }
    case "deleteTodo": {
      return tasks.filter((item) => item.id !== action.id);
    }
    case "toggleTodo": {
      return tasks.map((item) => {
        if (item.id === action.id) {
          // id가 일치하면 isDone값을 변경하여 저장
          return {
            todo: item.todo,
            id: item.id,
            isDone: !item.isDone,
          };
        } else {
          // 일치하지 않으면 그대로 저장
          return item;
        }
      });
    }
    default: {
      break;
    }
  }
};
