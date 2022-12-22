import React from "react";
import PropTypes from "prop-types";
import Qualitie from "./qualitie";

const QualitieList = ({ qualities }) => {
  return (
    <>
      {qualities.map((item) => (
        <Qualitie key={item._id} {...item} />
      ))}
    </>
  );
};

QualitieList.propTypes = {
  qualities: PropTypes.array
};

export default QualitieList;
