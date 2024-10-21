import { useReducer } from "react";
import AddTask from "./components/AddTask";
import { initialTasks } from "./data/taskData";
import { taskReducer } from "./reducers/taskReducer";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // nextId generator function
  const getNextId = (data) => {
    const maxId = data?.reduce(
      (prev, current) => (prev.id > current.id ? prev.id : current.id),
      0
    );

    return maxId + 1;
  };

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: getNextId(tasks),
      text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
