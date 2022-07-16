import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinItem from "./PinItem";

const Pin = ({ length, setOtpHandler }) => {
  const inputRef = useRef([]);
  const [inputValue, setInputValue] = useState(new Array(length).fill(""));
  const [inputBoxLen] = useState(new Array(length).fill(1));

  const handleChange = (e, index) => {
    inputValue[index] = e.target.value;
    setInputValue(inputValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    inputRef.current[index].className = "green";
    setOtpHandler(inputValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputRef.current[index].className = "";

    inputValue[index] = e.target.value;
    setInputValue(inputValue);
    setOtpHandler(inputValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);

    data.forEach((value, index) => {
      inputValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
      inputRef.current[index].className = "green";
    });
  };

  return (
    <div className="inputBox" onPaste={handlePaste}>
      {inputBoxLen.map((item, index) => (
        <PinItem
          key={index}
          backSpaceHandler={(e) => handleBackSpace(e, index)}
          changeHandler={(e) => handleChange(e, index)}
          ref={(element) => {
            inputRef.current[index] = element;
          }}
        />
      ))}
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
