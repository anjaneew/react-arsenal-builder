import { FaHome, FaUser, FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";


const Sidebar = () => {
  return (
    <aside>
      <ul>
        <div>
          <a href="http://google.com">
          <li>
            <div>
              <FaHome size={18}/>
            </div>
            
          </li></a>
          <a href="http://google.com">
          <li>
            
            <div>
              <FaUser size={18}/>
            </div>
          </li></a>
          <a href="http://google.com">
          <li>
            
            <div>
              <FaSearch size={18}/>
            </div>
          </li></a>
          <a href="http://google.com">
          <li>
            <div>
              <IoMdSettings  size={18}/>
            </div>
          </li></a>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;