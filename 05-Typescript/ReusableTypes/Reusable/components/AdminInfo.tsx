import {type Info } from './UserInfo.tsx';

type AdminInfoList = Info & {
    admin: string;
}

const AdminInfo = ({ username, email, age, location, admin}: AdminInfoList) => {
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