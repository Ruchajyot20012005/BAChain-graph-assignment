import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-part">
        <span className="bachain">BAChain</span>
        <span className="transparency">TRANSPARENCY</span>
      </div>
      <div className="right-part">
        <div className="circle"></div>
        <div className="username">Username</div>
      </div>
    </div>
  );
}

export default Navbar;
