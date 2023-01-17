import React from "react";
import { useParams } from "react-router-dom";
import Users from "./users";
import UserPage from "./userPage";

const UsersList = () => {
  const { userId } = useParams();
  return <>{userId ? <UserPage id={userId} /> : <Users />}</>;
};

export default UsersList;
