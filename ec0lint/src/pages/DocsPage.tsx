import React from "react";

import { features } from "../text";
import { Link, Outlet } from "react-router-dom";

export default function DocsPage() {
  return (
    <div id="container">
      <div id="menu">Lista tematów
        <h6 className="sectionText" style={{ marginBottom: '70px' }}><ul>
          {features.sort((a, b) => a.name > b.name ? 1 : -1).map(x => <li style={{ paddingTop: '10px' }}>
            <Link to={`${x.name}`} className="link">{x.name}</Link>
          </li>)}
        </ul></h6>
      </div>
      <div id="details">Szczegóły
      <Outlet /></div>
      <div id="tableOfContent">Spis treści</div>
    </div>
  );
}
