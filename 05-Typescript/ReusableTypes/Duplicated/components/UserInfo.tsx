type Info = {
    username: string;
    email: string;
    age: number;
    location: string[];
}

const UserInfo = ({ username, email, age, location}: Info) => {
  return (
    <div>
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{age}</li>
            <li>{JSON.stringify(location)}</li>
        </ul>
    </div>
  );
};

export default UserInfo;