import React from "react";
import "../CSS/Navigation.css";

const Navigation = ({ step, onNext, onPrevious }) => (
  <div className="navigation-buttons">
    {step > 1 && <button onClick={onPrevious}>Previous</button>}
    {step < 3 && <button onClick={onNext}>Next</button>}
  </div>
);

export default Navigation;
