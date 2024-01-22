import React from "react";

const InputDestination = ({
  onInput,
  inputValue,
  onButtonClick,
  setInputExists,
}) => {
  return (
    <form className="input" onSubmit={onButtonClick}>
      <label htmlFor="input-destination">Destination</label>
      <input
        id="input-destination"
        type="text"
        placeholder="Enter a destination"
        value={inputValue}
        onChange={(e) => {
          onInput(e.target.value);
          setInputExists(false);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default InputDestination;
