type AInfo = {
    username: string;
    email: string;
    age: number;
    location: string[];
    // extra type
    admin: string;
}

const AdminInfo = ({ username, email, age, location, admin}: AInfo) => {
  return (
    <div>
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{age}</li>
            <li>{JSON.stringify(location)}</li>
            <li>{admin}</li>
        </ul>
    </div>
  );
};

export default AdminInfo;