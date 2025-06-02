
import React from "react";
import { FaHome, FaTasks, FaCog, FaUserCircle, FaTimes } from "react-icons/fa";

const Sidebar=({ isOpen, onClose })=> {
  return (
    <>
  
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-full md:w-64 bg-white dark:bg-slate-950 shadow-md z-50 transform transition-transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 ">
          <h2  className="text-lg font-bold text-cyan-700 dark:text-blue-400">TaskMaster</h2>
          <button onClick={onClose} className="md:hidden text-gray-600 dark:text-gray-300">
            <FaTimes size={20} />
          </button>
        </div>
        <nav onClick={onClose} className="flex flex-col p-4 space-y-4 text-gray-700 dark:text-gray-300">
          <a href="#" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
            <FaHome /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
            <FaTasks /> Tasks
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400">
            <FaCog /> Settings
          </a>
        </nav>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <FaUserCircle size={24} />
          <span className="inline cursor-pointer">My Profile</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar
