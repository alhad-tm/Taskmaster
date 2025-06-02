import React, { useEffect, useState } from "react";
import { FaUserCircle, FaMoon, FaSun, FaBars } from "react-icons/fa";

const Header = ({ onMenuClick }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("taskmaster-darkmode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      if (!prev) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("taskmaster-darkmode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("taskmaster-darkmode", "false");
      }
      return !prev;
    });
  };

  return (
    <header className="bg-white dark:bg-slate-950 shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-10 md:ml-64">
      {/* Hamburger for mobile */}
      <button
        onClick={onMenuClick}
        className="text-gray-600 dark:text-gray-300 md:hidden"
        aria-label="Open menu"
      >
        <FaBars size={24} />
      </button>

      <h1 className="text-xl font-semibold text-blue-600 dark:text-blue-400 md:hidden">
        TaskMaster
      </h1>

      <div className="flex items-center space-x-4 w-auto md:w-full md:justify-between">
        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* User profile */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-gray-600 dark:text-gray-300" size={24} />
          <span className="text-gray-700 dark:text-gray-300 font-medium hidden sm:inline">
          Alhad
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header