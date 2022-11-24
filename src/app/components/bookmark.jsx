import React from "react";

const BookMark = ({ _id, bookmark, onToggleBookMark }) => {
  return (
    <>
      <button
        className={
          "bi " +
          (bookmark === false ? "bi-bookmark" : "bi-bookmark-heart-fill")
        }
        onClick={() => onToggleBookMark(_id)}
      ></button>
    </>
  );
};

export default BookMark;
