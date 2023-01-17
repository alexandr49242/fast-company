import React, { useState, useEffect } from "react";
import API from "../api";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    API.users.getById(id).then((data) => setUsers(data));
  }, []);
  const history = useHistory();
  const handleSave = () => {
    history.replace("/users"); // push ("/posts") - если нужно чтобы сохранялась
  };
  if (users) {
    return (
      <>
        <h1>{users.name}</h1>
        <h2>Профессия: {users.profession.name}</h2>
        <p>
          {users.qualities.map((item) => (
            <Qualitie key={item._id} {...item} />
          ))}
        </p>
        <p>completedMeetings: {users.completedMeetings}</p>
        <h2>Rate: {users.rate} /5</h2>
        <button
          onClick={() => {
            handleSave();
          }}
        >
          Все пользователи
        </button>
      </>
    );
  }
  return <h2>LOADING</h2>;
};

UserPage.propTypes = {
  id: PropTypes.string
};

export default UserPage;
