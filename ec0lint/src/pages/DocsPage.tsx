import React from "react";
// import SearchingBar from "../sections/SearchingBar"

import { dosc, features } from "../text";
import { Link, Outlet } from "react-router-dom";

export default function DocsPage() {
  return (
    <div id="container">
      <div id="menu">
        {/* <SearchingBar /> */}
        <h4><ul>{dosc.map(x => <li><Link to={`${x.title}`} className="link">{x.title}</Link></li>)}
          </ul></h4>
        <h6 className="sectionText" style={{ marginBottom: '70px' }}><ul>
          {features.sort((a, b) => a.name > b.name ? 1 : -1).map(x => <li style={{ paddingTop: '10px' }}>
            <Link to={`${x.name}`} className="link">{x.name}</Link>
          </li>)}
        </ul></h6>
      </div>
      <div id="details">
      <Outlet /></div>
      <div id="tableOfContent">Spis treści</div>
    </div>
  );
}
