import React, { useState, useEffect } from "react";
import _ from "lodash";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import API from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [selectedProf, setSelectedProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const pageSize = 8;

  const [users, setUsers] = useState();
  useEffect(() => {
    API.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, bookmark: !user.bookmark } : user
      )
    );
  };

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf, searchValue]);

  const handleProfessionsSelect = (item) => {
    if (searchValue !== "") setSearchValue("");
    setSelectedProf(item);
  };

  const handleSearchUsers = ({ target }) => {
    setSelectedProf(null);
    setSearchValue(target.value);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };
  /*
  const filteredUsers = selectedProf
    /? allUsers.filter(
        (user) =>
          JSON.stringify(user.profession) === JSON.stringify(selectedProf)
      )
    : allUsers;
    */

  if (users) {
    const filteredUsers = searchValue
      ? users.filter(
          (user) =>
            user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      : selectedProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(selectedProf)
        )
      : users;

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const usersCrop = paginate(sortedUsers, currentPage, pageSize);
    const clearFilter = () => {
      setSelectedProf();
    };

    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
              selectedItem={selectedProf}
              items={professions}
              onItemSelect={handleProfessionsSelect}
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
              {" "}
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <SearchStatus length={count} />
          <input
            type="text"
            name="searchValue"
            placeholder="Search..."
            onChange={handleSearchUsers}
            value={searchValue}
          />
          {count > 0 && (
            <UsersTable
              users={usersCrop}
              onItemDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
              onSort={handleSort}
              selectedSort={sortBy}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
  return "loading...";
};

export default UsersList;
