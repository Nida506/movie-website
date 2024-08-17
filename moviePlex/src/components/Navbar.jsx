import React from "react";
const Navbar = ({ children }) => {
  return (
    <div className="d-flex flex-row justify-content-between bg-nav pt-3 px-3 pb-2 mb-3">
      {children}
    </div>
  );
};

export default Navbar;
