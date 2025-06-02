import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const [due, setDue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !due.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      status,
      due,
    };

    onAdd(newTask);
    setTitle("");
    setPriority("Medium");
    setStatus("Pending");
    setDue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base "
    >
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Due (e.g., 'Due in 2 days')"
        className="border p-2 rounded"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        required
      />

      <select
        className="border p-2 rounded "
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <select
        className="border p-2 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <button
        type="submit"
        className="bg-cyan-700 text-white px-4 py-2 rounded md:col-span-2 hover:bg-cyan-900 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
