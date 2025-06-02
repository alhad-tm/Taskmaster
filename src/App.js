import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish report",
      priority: "High",
      status: "Pending",
      due: "Due in 3 days",
    },
    {
      id: 2,
      title: "Email team updates",
      priority: "Medium",
      status: "In Progress",
      due: "Due tomorrow",
    },
    {
      id: 3,
      title: "Plan sprint meeting",
      priority: "Low",
      status: "Completed",
      due: "Due today",
    },
  ]);

  const handleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <TaskForm/>
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />

          ))}
        </main>
      </div>
    </div>
  );
}
