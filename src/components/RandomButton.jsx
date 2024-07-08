import React from "react";

const RandomButton = ({ onRandom }) => {
  return (
    <button className="random-btn" onClick={onRandom}>
      Surprise Me
    </button>
  );
};

export default RandomButton;
