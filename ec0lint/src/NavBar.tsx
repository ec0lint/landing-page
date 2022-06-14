import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getClassName = (path: string) => {
    return currentPath.includes(path) ? "navLinkPurple" : "navLinkBlue";
  }

  return (
    <div className="header">
      <h6 className="headerElement">
        <Link to="/team" className={getClassName("/team")}>Team</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/blog" className={getClassName("/blog")}>Blog</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/use-cases" className={getClassName("/use-cases")}>Use Cases</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/features" className={getClassName("/features")}>Features</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/get-started" className={getClassName("/get-started")}>Get Started</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/" className={(currentPath === "" || currentPath === "/") ? "navLinkPurple" : "navLinkBlue"}>Home</Link>
      </h6>
  </div>
  );
}
