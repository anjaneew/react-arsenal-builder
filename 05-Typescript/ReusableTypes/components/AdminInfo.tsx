import type React from "react";
import { type AdminInfoList } from "../Types.tsx";

type AdminInfoProps = {
    admin: AdminInfoList;
}

const AdminInfo: React.FC<AdminInfoProps> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Info</h2>
        <ul>
            <li>ID:{admin.id}</li>
            <li>Name:{admin.name}</li>
            <li>Email: {admin.email}</li>
            <li>Role: {admin.role}</li>
            <li>Last Login:{admin.lastLogin.toLocaleString()}</li>
        </ul>
    </div>
  );
};

export default AdminInfo;