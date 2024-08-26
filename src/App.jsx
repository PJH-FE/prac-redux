import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { TaskProvider } from "./TasksContext.jsx";

export default function TaskApp() {
  return (
    <>
      <TaskProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </>
  );
}
