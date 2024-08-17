import React, { useState } from "react";

const Box = ({ children }) => {
  //state variable
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-5">
      <span
        onClick={() => setIsOpen((e) => !e)}
        className="toggleBtn marginBox1"
      >
        {" "}
        {isOpen ? "-" : "+"}{" "}
      </span>
      {isOpen && children}
    </div>
  );
};

export default Box;
