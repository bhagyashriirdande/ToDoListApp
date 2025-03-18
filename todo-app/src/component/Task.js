import { Check, Trash } from "lucide-react";

export default function Task({ task, index, toggleComplete, deleteTask }) {
  return (
    <div className="task">
      <span>{index + 1}. {task.text}</span>
      <button onClick={() => toggleComplete(index)}><Check /></button>
      <button onClick={() => deleteTask(index)}><Trash /></button>
    </div>
  );
}

