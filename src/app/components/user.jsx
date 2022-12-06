import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

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
          <BookMark
            status={user.bookmark}
            onClick={() => onToggleBookMark(_id)}
          />
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
User.propTypes = {
  _id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired
};

export default User;
