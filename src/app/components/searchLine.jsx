import React from "react";
import PropTypes from "prop-types";

const SearchLine = ({ users }) => {
  // const [searchValue, setSearchValue] = useState("");
  // const filteredUsersName = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchValue.toLowerCase())
  // );
  return (
    <form>
      <label htmlFor="search"></label>&nbsp;
      <input
        type="search"
        id="search"
        placeholder="Search..."
        name="search"
        // onChange={(event) => setSearchValue(event.target.value)}
      />
    </form>
  );
};

SearchLine.propTypes = {
  users: PropTypes.array
};

export default SearchLine;
