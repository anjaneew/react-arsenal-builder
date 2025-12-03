import { FaUserCircle } from "react-icons/fa";

const UserCard = ({ person }) => {
  return (
    <div>
      <div>
        <FaUserCircle/>
        <span>{person.name}</span>
      </div>
      <button>{person.following ? "Following" : "Follow"}</button>
    </div>
  );
};

export default UserCard;