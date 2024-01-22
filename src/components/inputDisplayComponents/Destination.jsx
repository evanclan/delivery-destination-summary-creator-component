import React from "react";

const Destination = ({ destination, onDelete, onFinished }) => {
  return (
    <div className="destination">
      {destination}
      <div className="btns">
        <button
          onClick={() => onFinished(destination)}
          className="finished-btn"
        >
          finished
        </button>
        <button onClick={() => onDelete(destination)} className="del-btn">
          del
        </button>
      </div>
    </div>
  );
};

export default Destination;
