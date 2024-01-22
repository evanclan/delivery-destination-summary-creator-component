import React from "react";

const FinishedDestination = ({ item }) => {
  return (
    <div className="destination">{`${item.destination} ${item.date}`}</div>
  );
};

export default FinishedDestination;
