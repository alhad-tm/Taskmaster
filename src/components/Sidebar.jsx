
import { FaTasks, FaCog, FaTachometerAlt, FaUserCircle } from "react-icons/fa";

const Sidebar=()=> {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:flex flex-col justify-between h-screen sticky top-0">
      {/* Top Section */}
      <div>
        <div className="p-6 text-2xl font-bold text-blue-900">
          TaskMaster
        </div>
        <nav className="px-4">
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-800 cursor-pointer">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-800 cursor-pointer">
              <FaTasks />
              <span>Tasks</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700 hover:text-blue-800 cursor-pointer">
              <FaCog />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t">
        <div className="flex items-center justify-center text-gray-600">
          <FaUserCircle size={28} />
        </div>
      </div>
    </aside>
  );
}



export default Sidebar
