import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [number, setNumber] = useState(12);
  const formatCount = () => {
    return number === 0 ? "Никто с тобой не тусанёт" : number;
  };
  const getBageClasses = () => {
    let classes = "badge ";
    classes += number === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };
  const handleDelete = (userId) => {
    const deleteClick = () => {
      setUsers((prevState) =>
        prevState.filter((item) => {
          return item._id !== userId;
        })
      );
      setNumber((prevState) => prevState - 1);
    };
    return (
      <>
        <span>
          <button className="btn btn-danger" onClick={deleteClick} key={userId}>
            delete
          </button>
        </span>
      </>
    );
  };
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет с тобой сегодня";
    if ([2, 3, 4].indexOf(lastOne) >= 0)
      return "человека тусанут с тобой сегодня";
    if (lastOne === 1) return "человек тусанет с тобой сегодня";
    if (lastOne === 0) return "";
    return;
  };
  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((item) => (
            <span className={`badge bg-${item.color} m-1`} key={item._id}>
              {item.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate}/5`}</td>
        <td>{handleDelete(user._id)}</td>
      </tr>
    ));
  };
  return number !== 0 ? (
    <>
      <h2>
        <span className={getBageClasses()}>{`${formatCount()} ${renderPhrase(
          number
        )}`}</span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </>
  ) : (
    <>
      {" "}
      <h2>
        <span className={getBageClasses()}>{`${formatCount()} ${renderPhrase(
          number
        )}`}</span>
      </h2>
    </>
  );
};

// export default Users;
