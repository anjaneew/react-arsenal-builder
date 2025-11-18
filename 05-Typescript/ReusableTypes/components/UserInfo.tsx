import React from "react";
import { type Info } from "../Types.tsx";

type UserInfoProps = {
  user: Info;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div>
      <h2>UserInfo</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;