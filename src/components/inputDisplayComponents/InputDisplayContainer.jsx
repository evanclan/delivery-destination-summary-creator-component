import React from "react";
import InputDestination from "./InputDestination";
import DestinationList from "./DestinationList";
import Destination from "./Destination";
import "./styles.css";
import { useState } from "react";
import FinishedDestinationContainer from "./FinishedDestinationContainer";
import FinishedDestination from "./FinishedDestination";
import Summary from "./Summary";

const tempDestinations = ["manila", "tokyo", "seoul"];
const InputDisplayContainer = () => {
  const [destinations, setDestinations] = useState([]);
  const [input, setInput] = useState("");
  const [inputExists, setInputExists] = useState(false);
  const [finishedDestinations, setFinishedDestinations] = useState([]);
  const [summary, setSummary] = useState([]);

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    if (input === "") return;
    if (destinations.includes(input)) {
      setInputExists(true);
      return;
    }
    setDestinations([...destinations, input]);
  };

  const onDestinationFinished = (destination) => {
    const date = new Date();
    const dateString = `${date.getHours()}:${date.getMinutes()}`;
    setFinishedDestinations([
      ...finishedDestinations,
      { destination, date: dateString },
    ]);
    console.log(finishedDestinations);
    setDestinations(destinations.filter((d) => d !== destination));
  };

  const onDestinationDelete = (destination) => {
    setDestinations(destinations.filter((d) => d !== destination));
  };

  const handleClearAll = () => {
    setFinishedDestinations([]);
  };

  const handlePrintSummary = () => {
    const date = new Date();
  };

  return (
    <div className="input-display-container">
      <InputDestination
        onInput={setInput}
        inputValue={input}
        onButtonClick={handleAddButtonClick}
        setInputExists={setInputExists}
      />
      {inputExists && (
        <p className="exist-error">The destination already exists</p>
      )}
      {destinations.length === 0 ? (
        <p className="exist-error">add destination</p>
      ) : (
        <DestinationList>
          {destinations.map((destination, index) => {
            return (
              <Destination
                destination={destination}
                key={index}
                onDelete={onDestinationDelete}
                onFinished={onDestinationFinished}
              />
            );
          })}
        </DestinationList>
      )}
      <FinishedDestinationContainer>
        {finishedDestinations.length === 0 ? (
          <p className="exist-error">no finished destinations</p>
        ) : (
          <>
            {finishedDestinations.map((item, index) => {
              return <FinishedDestination item={item} key={index} />;
            })}
            <button className="btn-clr-all" onClick={() => handleClearAll()}>
              Clear
            </button>
            <button
              className="btn-clr-all"
              onClick={() => handlePrintSummary()}
            >
              Print Summary
            </button>
          </>
        )}
      </FinishedDestinationContainer>
      {!summary && <Summary />}
    </div>
  );
};

export default InputDisplayContainer;
