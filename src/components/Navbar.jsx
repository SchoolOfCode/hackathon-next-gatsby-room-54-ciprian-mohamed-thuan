import { Link } from "gatsby";
import React from "react";

function Navbar() {
  return (
    <>
      <h1> What is this</h1>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/events">About</Link>
      </div>
    </>
  );
}

export default Navbar;
