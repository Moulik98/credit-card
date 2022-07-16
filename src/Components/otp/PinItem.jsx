import React from "react";
import { forwardRef } from "react";

const PinItem = forwardRef(({ changeHandler, backSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      backSpaceHandler(e);
    } else {
      changeHandler(e);
    }
  };

  return (
    <>
      <input ref={ref} maxLength={1} onKeyUp={handleKeyUp} />
    </>
  );
});

export default PinItem;