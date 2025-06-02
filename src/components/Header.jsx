import { FaUserCircle } from "react-icons/fa";

const Header=()=> {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between sticky top-0 z-10">
      {/* Title shown only on small screens */}
      <h1 className="text-xl font-semibold text-blue-600 md:hidden">TaskMaster</h1>

      {/* User profile */}
      <div className="flex items-center space-x-2">
        <FaUserCircle className="text-gray-600" size={24} />
        <span className="text-gray-700 font-medium hidden sm:inline">User</span>
      </div>
    </header>
  );
}

export default Header
