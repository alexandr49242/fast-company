import React from "react";
import PropTypes from "prop-types";
// import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
import BookMark from "./bookmark";
import QualitieList from "./qualitiesList";
import Table from "./table";

const UsersTable = ({
  users,
  onToggleBookMark,
  onItemDelete,
  onSort,
  selectedSort
}) => {
  const columns = {
    name: { path: "name", name: "Имя" },
    qualities: {
      name: "Качества",
      component: (user) => <QualitieList qualities={user.qualities} />
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: {
      path: "completedMeetings",
      name: "Встретился, раз"
    },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          onClick={() => onItemDelete(user._id)}
          className="btn btn-danger"
        >
          delete
        </button>
      )
    }
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
    // <Table
    //   onSort={onSort}
    //   selectedSort={selectedSort}
    //   columns={columns}
    //   data={users}
    // >
    //   <TableHeader {...{ onSort, selectedSort, columns }} />
    //   <TableBody {...{ columns, data: users }} />
    // </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onItemDelete: PropTypes.func,
  onSort: PropTypes.func,
  selectedSort: PropTypes.object.isRequired
};

export default UsersTable;
