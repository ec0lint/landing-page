import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [displayFeatures, setDisplayFeatures] = React.useState(true);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="header">
      <h6 className="headerElement">
        <Link to="/team" className={currentPath === "/team" ? "navLinkPurple" : "navLinkBlue"}>Team</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/blog" className={currentPath === "/blog" ? "navLinkPurple" : "navLinkBlue"}>Blog</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/use-cases" className={currentPath === "/use-cases" ? "navLinkPurple" : "navLinkBlue"}>Use Cases</Link>
      </h6>
      <h6 className="headerElement" onMouseEnter={() => setDisplayFeatures(true)} onMouseLeave={() => setDisplayFeatures(false)}>
        <Link to="/features" className={currentPath === "/features" ? "navLinkPurple" : "navLinkBlue"}>Features</Link>
      </h6>
      {displayFeatures && <span>
        <h6 className="headerElement headerDropdown">
          <Link to="/features/1" className={currentPath === "/features1" ? "navLinkPurple" : "navLinkBlue"}>Features 1</Link>
        </h6>
      </span>}
      <h6 className="headerElement">
        <Link to="/get-started" className={currentPath === "/get-started" ? "navLinkPurple" : "navLinkBlue"}>Get Started</Link>
      </h6>
      <h6 className="headerElement">
        <Link to="/"className={(currentPath === "" || currentPath === "/") ? "navLinkPurple" : "navLinkBlue"}>Home</Link>
      </h6>
  </div>
  );
}
