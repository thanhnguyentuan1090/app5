import React, { useState } from "react";

function FormInput(props) {
  console.log(props);
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="form-input"
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(inputValue);
        setInputValue("");
      }}
    >
      <input
        className="inputtext"
        type="text"
        placeholder="Enter your task here..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit" className="addbutton">
        Add
      </button>
    </form>
  );
}

export default FormInput;
