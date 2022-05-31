import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="header">
      <h6 className="headerElement">
        <Link to="/team" className="navLink">Team</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/blog" className="navLink">Blog</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/use-cases" className="navLink">Use Cases</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/features" className="navLink">Features</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/get-started" className="navLink">Get Started</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/"className="navLink">Home</Link>
      </h6>
  </div>
  );
}
