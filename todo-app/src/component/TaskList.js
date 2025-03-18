import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

