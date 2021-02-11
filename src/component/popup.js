import React, { useState } from "react";
import "./popupStyle.css";

const Popup = ({ handleClose, edit, content, sendingData }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <form className="input-section">
          <h1>Edit</h1>
          <input
            type="text"
            value={inputValue}
            placeholder={sendingData}
            onChange={handleChange}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button onClick={(e) => edit(e, inputValue)}>Save</button>
          {content}
        </form>
      </div>
    </div>
  );
};

export default Popup;
