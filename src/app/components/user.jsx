import React from "react";
import Qualitie from "./qualitie";

const User = ({ _id, onDelete, onToggleBookMark, ...user }) => {
  return (
    <>
      <tr key={_id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((item) => (
            <Qualitie key={item._id} {...item} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate} /5</td>
        <td>
          <button
            className={
              "bi " +
              (user.bookmark === false
                ? "bi-bookmark"
                : "bi-bookmark-heart-fill")
            }
            onClick={() => onToggleBookMark(_id)}
          ></button>
        </td>
        <td>
          <button onClick={() => onDelete(_id)} className="btn btn-danger">
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
