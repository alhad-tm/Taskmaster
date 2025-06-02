import { useState } from "react";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const TaskCard = ({ task, onComplete, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-400",
    Low: "bg-green-500",
  };

  return (
    <div
      className={`relative bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 transition-all ${
        task.status === "Completed" ? "opacity-70" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Priority Dot */}
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200">
          <span
            className={`w-3 h-3 rounded-full ${priorityColors[task.priority]}`}
          ></span>
          {task.title}
        </span>
        {hovered && (
          <div className="flex gap-2 ">
            {task.status !== "Completed" && (
              <button
                onClick={() => onComplete(task.id)}
                className="text-green-600 hover:text-green-800 animate-bounce"
                aria-label="Mark as Completed"
              >
                <FaCheckCircle />
              </button>
            )}
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700 animate-pulse"
              aria-label="Delete Task"
            >
              <FaTrashAlt />
            </button>
          </div>
        )}
      </div>

      {/* Status and Due Date */}
      <div className="text-sm text-gray-700 dark:text-gray-300">
        <p className={task.status === "Completed" ? "line-through" : ""}>
          Status: {task.status}
        </p>
        <p className="mt-2"> Due: {task.due}</p>
      </div>
    </div>
  );
};

export default TaskCard;
