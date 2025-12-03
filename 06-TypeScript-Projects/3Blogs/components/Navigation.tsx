import { FaSearch, FaUserCircle } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav>
      {/* Center: Search Bar */}
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="🔎 Search "
        />
      </div>
      {/* Right: User Profile */}
      <div>
        <FaUserCircle/>
      </div>
    </nav>
  );
};

export default Navigation;