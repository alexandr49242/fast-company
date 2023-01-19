import React, { useState, useEffect } from "react";
import API from "../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({ id }) => {
  const history = useHistory();
  const [user, setUsers] = useState();
  useEffect(() => {
    API.users.getById(id).then((data) => setUsers(data));
  }, []);
  const handleClick = () => {
    history.push("/users"); // push ("/posts") - если нужно чтобы сохранялась
  };
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate} /5</h2>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Все пользователи
        </button>
      </div>
    );
  }
  return <h2>LOADING</h2>;
};

UserPage.propTypes = {
  id: PropTypes.string
};

export default UserPage;
