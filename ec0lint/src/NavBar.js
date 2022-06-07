import React from "react";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';


export default function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const a = axios.run();

  return (
    <div className="header">
      <h6 className="headerElement">
        <Link to="/team" className={currentPath === "/team" ? "navLinkPurple" : "navLinkBlue"}>Team</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/blog" className={currentPath.includes("/blog") ? "navLinkPurple" : "navLinkBlue"}>Blog</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/use-cases" className={currentPath === "/use-cases" ? "navLinkPurple" : "navLinkBlue"}>Use Cases</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/features" className={currentPath.includes("/features") ? "navLinkPurple" : "navLinkBlue"}>Features</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/get-started" className={currentPath === "/get-started" ? "navLinkPurple" : "navLinkBlue"}>Get Started</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/"className={(currentPath === "" || currentPath === "/") ? "navLinkPurple" : "navLinkBlue"}>Home</Link>
      </h6>
  </div>
  );
}
