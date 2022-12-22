import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };
  const handleCaret = (item) => {
    if (item === selectedSort.path) {
      if (selectedSort.order === "asc") {
        return "bi bi-caret-up-fill";
      }
      if (selectedSort.order === "desc") {
        return "bi bi-caret-down-fill";
      }
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : null
            }
            // {...{ role: columns[column].path && "button" }} так тоже можно
            role={columns[column].path ? "button" : ""}
            scope="col"
          >
            {columns[column].name}
            <span
              className={
                columns[column].path ? handleCaret(columns[column].path) : null
              }
            ></span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired
};

export default TableHeader;
