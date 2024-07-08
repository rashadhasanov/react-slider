import React from "react";

const Navigation = ({ onPrev, onNext }) => {
  return (
    <div className="btn-container">
      <button className="prev" onClick={onPrev}>
        ‹
      </button>
      <button className="next" onClick={onNext}>
        ›
      </button>
    </div>
  );
};

export default Navigation;
