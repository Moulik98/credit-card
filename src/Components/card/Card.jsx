import React from "react";
import { forwardRef } from "react";

const CardInput = forwardRef(({ frontChangeHandler, backSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      backSpaceHandler(e);
    } else {
      frontChangeHandler(e);
    }
  };

  return (
    <>
      <input ref={ref} onKeyUp={handleKeyUp} minLength={5} maxLength={5} />
    </>
  );
});

export default CardInput;